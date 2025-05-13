import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { QueryFindAllDto } from './dto';
import { EntriesService } from './entries.service';
import { Prisma } from '@prisma/client';
import {
  change_body_entrie,
  pagination_helper,
  pagination_prisma,
} from 'src/helper';
import { JwtPayload } from 'src/interface/jwt-payload';
import {
  DictionaryService,
  FavoriteService,
  HistoryService,
} from 'src/services';
@Injectable()
export class EntriesController {
  constructor(
    private readonly entries: EntriesService,
    private readonly free_dictionary: DictionaryService,
    private readonly history: HistoryService,
    private readonly favorite_service: FavoriteService,
  ) { }
  async find_all(query: QueryFindAllDto) {
    const { limit, page, search, order } = query;
    const params: Prisma.entriesFindManyArgs = {
      orderBy: {
        entrie: 'asc',
      },
      select: {
        entrie: true,
      },
      ...pagination_prisma(+limit, +page),
    };
    if (order) params.orderBy = order;
    if (search)
      params.where = {
        entrie: {
          contains: search,
        },
      };
    const { rows, count } = await this.entries.find_all(params);
    const data = pagination_helper(
      page,
      limit,
      count,
      rows.map(({ entrie }) => entrie),
    );
    return data;
  }
  async valid_word(word: string) {
    word = word.trim();
    const entrie = await this.entries.find_one(word);
    if (!entrie) throw new NotFoundException('Não foi encontrada palavra');
    return entrie;
  }
  async find_one(word: string, user: JwtPayload) {
    const entrie = await this.valid_word(word);
    let entries = []
    try {
      const { data } = await this.free_dictionary.search_in_free_dictionary(
        encodeURIComponent(word),
      );
      entries = data
    } catch { }

    if (!entries?.length) {
      throw new NotFoundException('Não foi encontrada palavra');
    }
    const resp = entries.pop();
    resp.meanings.push(...entries.flatMap((item) => item.meanings));
    await this.history.create({
      id_entrie: entrie.id_entrie,
      id_user: user.id_user,
    });
    const body = change_body_entrie(resp);

    return body;
  }

  async favorite(word: string, user: JwtPayload) {
    const entrie = await this.valid_word(word);
    const favorite = await this.favorite_service.find_one({
      id_entrie: entrie.id_entrie,
      id_user: user.id_user,
    });
    if (favorite)
      throw new BadRequestException(
        'A palavra em questão já se encontra entre os itens favoritos.',
      );
    await this.favorite_service.create({
      id_entrie: entrie.id_entrie,
      id_user: user.id_user,
    });
  }

  async unfavorite(word: string, user: JwtPayload) {
    const entrie = await this.valid_word(word);
    const favorite = await this.favorite_service.find_one({
      id_entrie: entrie.id_entrie,
      id_user: user.id_user,
    });
    if (!favorite)
      throw new NotFoundException('Não foi encontrada palavra favoritada');
    await this.favorite_service.delete({
      id_entries_fav: favorite.id_entries_fav,
    });
  }
}

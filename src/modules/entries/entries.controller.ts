import { Injectable, NotFoundException } from '@nestjs/common';
import { QueryFindAllDto } from './dto';
import { EntriesService } from './entries.service';
import { Prisma } from '@prisma/client';
import { pagination_helper, pagination_prisma } from 'src/helper';
import { JwtPayload } from 'src/interface/jwt-payload';
@Injectable()
export class EntriesController {
  constructor(private readonly entries: EntriesService) {}
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
  async find_one(word: string, user: JwtPayload) {
    const entrie = await this.entries.find_one(word);
    if (!entrie) throw new NotFoundException('Não foi encontrada palavra');
  }
}

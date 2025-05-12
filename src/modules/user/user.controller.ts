import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtPayload } from 'src/interface/jwt-payload';
import { QueryFindAllHistoryDto } from './dto/query-find-all.dto';
import { pagination_helper, pagination_prisma } from 'src/helper';
import { Prisma } from '@prisma/client';
import { HistoryService } from 'src/services';
@Injectable()
export class UserController {
  constructor(
    private readonly user_service: UserService,
    private readonly history_service: HistoryService,
  ) {}
  async user_me(user: JwtPayload) {
    const data = await this.user_service.find_one(user.id_user, {
      omit: { password: true },
    });
    if (!data) throw new NotFoundException('Não foi encontrado usuário');
    return data;
  }

  async history(query: QueryFindAllHistoryDto, user: JwtPayload) {
    const { limit, page, search, order } = query;
    const params: Prisma.history_read_entrieFindManyArgs = {
      orderBy: {
        created_at: 'desc',
      },
      where: {
        id_user: user.id_user,
      },
      select: {
        entries: {
          select: {
            entrie: true,
          },
        },
        created_at: true,
      },
      distinct: 'id_entrie',
      ...pagination_prisma(+limit, +page),
    };
    if (order) {
      const [key, value] = Object.entries(order)[0];
      params.orderBy =
        key === 'word'
          ? {
              entries: {
                entrie: value as 'desc' | 'asc',
              },
            }
          : order;
    }

    if (search)
      params.where.entries = {
        entrie: {
          contains: search,
        },
      };
    const { rows, count } = await this.history_service.find_all(params);
    const resp = rows.map((row) => ({
      word: row.entries.entrie,
      added: row.created_at,
    }));
    const data = pagination_helper(page, limit, count, resp);
    return data;
  }
}

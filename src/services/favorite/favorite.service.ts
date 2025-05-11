import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ id_entrie, id_user }) {
    return await this.prisma.entries_fav.create({
      data: {
        id_entrie,
        id_user,
      },
    });
  }

  async find_one({ id_entrie, id_user }) {
    return await this.prisma.entries_fav.findFirst({
      where: {
        id_entrie,
        id_user,
      },
    });
  }

  async delete({ id_entries_fav }) {
    return await this.prisma.entries_fav.delete({
      where: {
        id_entries_fav,
      },
    });
  }
}

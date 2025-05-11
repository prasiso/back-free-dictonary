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
}

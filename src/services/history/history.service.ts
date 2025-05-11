import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class HistoryService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ id_entrie, id_user }) {
    return await this.prisma.history_read_entrie.create({
      data: {
        id_entrie,
        id_user,
      },
    });
  }
}

import { Injectable } from '@nestjs/common';
import { EntriesRepository } from './entries.repository';
import { Prisma } from '@prisma/client';
@Injectable()
export class EntriesService {
  constructor(private readonly entries: EntriesRepository) { }
  async find_all(params: Prisma.entriesFindManyArgs) {
    const { where, ...rest } = params;
    const [count, rows] = await Promise.all([
      this.entries.count({ where }),
      this.entries.find_all({ ...rest, where }),
    ]);
    return { count, rows };
  }
}

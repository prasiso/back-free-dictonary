import { Module } from '@nestjs/common';
import { EntriesRouter } from '.';
import { EntriesController, EntriesService } from '.';
import { DictionaryModule, HashService } from 'src/services';
import { EntriesRepository } from './entries.repository';

@Module({
  controllers: [EntriesRouter],
  providers: [
    EntriesController,
    EntriesService,
    HashService,
    EntriesRepository,
  ],
  imports: [DictionaryModule],
})
export class EntrieModule {}

import { Body, Controller, Query } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { ApiTags } from '@nestjs/swagger';
import { d_find_all } from './decorator/find_all';
import { QueryFindAllDto } from './dto';

@Controller('entries/end')
@ApiTags('Palavras')
export class EntriesRouter {
  constructor(private readonly entries: EntriesController) { }
  @d_find_all()
  async find_all(@Query() query: QueryFindAllDto) {
    return await this.entries.find_all(query)
  }
}

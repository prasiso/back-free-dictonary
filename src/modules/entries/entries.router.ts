import { Body, Controller, Param, Query } from '@nestjs/common';
import { EntriesController } from './entries.controller';
import { ApiTags } from '@nestjs/swagger';
import { d_find_all } from './decorator/find_all';
import { QueryFindAllDto } from './dto';
import { d_find_one } from './decorator/find_one';
import { getUser } from 'src/decorator';
import { JwtPayload } from 'src/interface/jwt-payload';

@Controller('entries/end')
@ApiTags('Palavras')
export class EntriesRouter {
  constructor(private readonly entries: EntriesController) { }
  @d_find_all()
  async find_all(@Query() query: QueryFindAllDto) {
    return await this.entries.find_all(query)
  }

  @d_find_one()
  async find_one(@Param('word') word: string, @getUser() user: JwtPayload){
    return await this.entries.find_one(word, user)
  }
}

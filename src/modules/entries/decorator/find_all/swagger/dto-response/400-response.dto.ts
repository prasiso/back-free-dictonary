import { ApiProperty } from '@nestjs/swagger';
import { ResponseErroGlobalSwagger } from 'src/decorator/dto';

export class RespFindAllEntries400Dto extends ResponseErroGlobalSwagger {
  @ApiProperty({
    example: ['query page não enviado', 'query limit não enviado'],
  })
  message: any;
  @ApiProperty({ example: 400 })
  status: number;
}

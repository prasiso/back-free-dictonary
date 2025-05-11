import { ApiProperty } from '@nestjs/swagger';
import { ResponseErroGlobalSwagger } from 'src/decorator/dto';

export class RespFavoriteEntries400Dto extends ResponseErroGlobalSwagger {
  @ApiProperty({
    example: 'A palavra em questão já se encontra entre os itens favoritos.',
  })
  message: any;
  @ApiProperty({ example: 400 })
  status: number;
}

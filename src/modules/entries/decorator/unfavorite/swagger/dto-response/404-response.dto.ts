import { ApiProperty } from '@nestjs/swagger';
import { ResponseErroGlobalSwagger } from 'src/decorator/dto';

export class RespFavoriteEntries404Dto extends ResponseErroGlobalSwagger {
  @ApiProperty({
    example: 'Não foi encontrada palavra',
  })
  message: any;
  @ApiProperty({ example: 404 })
  status: number;
}

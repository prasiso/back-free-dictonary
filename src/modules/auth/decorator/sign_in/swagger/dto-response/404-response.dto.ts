import { ApiProperty } from '@nestjs/swagger';
import { ResponseErroGlobalSwagger } from 'src/decorator/dto';

export class Resp404Dto extends ResponseErroGlobalSwagger {
  @ApiProperty({
    example:
      'O e-mail informado não foi encontrado em nosso sistema. Por favor, verifique e tente novamente.',
  })
  message: any;
  @ApiProperty({ example: 404 })
  status: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { ResponseErroGlobalSwagger } from 'src/decorator/dto';

export class Resp400Dto extends ResponseErroGlobalSwagger {
  @ApiProperty({
    example: [
      'Campo Senha não pode ser vazio',
      'Campo email não pode ser vazio',
    ],
  })
  message: any;
  @ApiProperty({ example: 400 })
  status: number;
}

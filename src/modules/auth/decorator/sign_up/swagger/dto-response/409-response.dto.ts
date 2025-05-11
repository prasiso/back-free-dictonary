import { ApiProperty } from '@nestjs/swagger';
import { ResponseErroGlobalSwagger } from 'src/decorator/dto';

export class RespSignUp409Dto extends ResponseErroGlobalSwagger {
  @ApiProperty({
    example:
      'O e-mail informado já está cadastrado em nosso sistema. Por favor, utilize outro e-mail.',
  })
  message: string;
}

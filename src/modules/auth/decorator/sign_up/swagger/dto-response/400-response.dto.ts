import { ApiProperty } from '@nestjs/swagger';
import { ResponseErroGlobalSwagger } from 'src/decorator/dto';

export class RespSignUp400Dto extends ResponseErroGlobalSwagger {
  @ApiProperty({
    example: [
      'Campo nome não pode ser vazio',
      'Campo Senha não pode ser vazio',
      'Campo email não pode ser vazio',
      'A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula, uma letra minúscula, um número e um caractere especial.',
    ],
  })
  message: any;
}

import { ApiProperty } from '@nestjs/swagger';

export class Resp200Dto {
  @ApiProperty({
    example: 'Fullstack Challenge 🏅 - Dictionary',
    description: 'Mensagem de health',
  })
  message: string;
}

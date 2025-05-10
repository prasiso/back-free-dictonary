import { ApiProperty } from '@nestjs/swagger';

export class Resp500GlobalSwagger {
  @ApiProperty({
    example: '2025-05-10T20:17:37.186Z',
    description: 'Data de envio da request',
  })
  timestamp: Date;
  @ApiProperty({
    example: '/',
    description: 'Caminho do end point',
  })
  path: string;
  @ApiProperty({
    example:
      '⚠️ Ocorreu um erro inesperado. Estamos trabalhando para resolver o mais rápido possível.',
    description: 'Descrição de erro',
  })
  message: string;
  @ApiProperty({
    example: 500,
    description: 'Status da response',
  })
  status: number;
}

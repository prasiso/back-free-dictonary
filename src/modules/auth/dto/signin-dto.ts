import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { IsValidPassword } from 'src/decorator';

export class SigninDto {
  @ApiProperty({ example: 'test' })
  @IsNotEmpty({ message: 'Campo Senha não pode ser vazio' })
  password: string;

  @ApiProperty()
  @IsEmail()
  @ApiProperty({ example: 'example@email.com' })
  @IsNotEmpty({ message: 'Campo email não pode ser vazio' })
  email: string;
}

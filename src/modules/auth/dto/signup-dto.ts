import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';
import { IsValidPassword } from 'src/decorator';

export class SignUpDto {
  @ApiProperty({ example: 'User 1' })
  @IsNotEmpty({ message: 'Campo nome não pode ser vazio' })
  name: string;

  @ApiProperty({ example: 'test' })
  @IsNotEmpty({ message: 'Campo Senha não pode ser vazio' })
  @IsValidPassword()
  password: string;

  @ApiProperty()
  @IsEmail()
  @ApiProperty({ example: 'example@email.com' })
  @IsNotEmpty({ message: 'Campo email não pode ser vazio' })
  email: string;
}

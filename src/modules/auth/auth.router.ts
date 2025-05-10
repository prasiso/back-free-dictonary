import { Body, Controller } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SignUpDto } from './dto';
import { d_signup } from './decorator';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthRouter {
  constructor(private readonly auth: AuthController) {}
  @d_signup()
  async signup(@Body() body: SignUpDto) {
    return await this.auth.signup(body);
  }
}

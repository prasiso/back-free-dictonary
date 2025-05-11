import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserController } from './user.controller';
import { d_user_me } from './decorator';
import { getUser } from 'src/decorator';
import { JwtPayload } from 'src/interface/jwt-payload';

@Controller('user')
@ApiTags('user')
export class UserRouter {
  constructor(private readonly user: UserController) {}
  @d_user_me()
  async user_me(@getUser() user: JwtPayload) {
    return await this.user.user_me(user);
  }
}

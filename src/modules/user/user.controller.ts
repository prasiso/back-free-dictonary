import { Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtPayload } from 'src/interface/jwt-payload';
@Injectable()
export class UserController {
  constructor(private readonly user_service: UserService) { }
  async user_me(user: JwtPayload) {
    const data = await this.user_service.find_one(user.id_user, {
      omit: { password: true },
    });
    if (!data) throw new NotFoundException('Não foi encontrado usuário');
    return data;
  }
}

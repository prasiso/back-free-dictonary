import { ConflictException, Injectable } from '@nestjs/common';
import { UserService } from '../user';
import { SignUpDto } from './dto';

@Injectable()
export class AuthController {
  constructor(private readonly user: UserService) {}
  async signup(body: SignUpDto) {
    const user = await this.user.find_one(undefined, {
      where: {
        email: body.email,
      },
    });
    if (user)
      throw new ConflictException(
        'O e-mail informado já está cadastrado em nosso sistema. Por favor, utilize outro e-mail.',
      );
    return await this.user.create(body);
  }
}

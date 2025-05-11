import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserService } from '../user';
import { SigninDto, SignUpDto } from './dto';
import { HashService } from 'src/services';
import { AuthService } from './auth.service';

@Injectable()
export class AuthController {
  constructor(
    private readonly user: UserService,
    private readonly auth: AuthService,
    private readonly hash: HashService,
  ) {}
  async sign_up(body: SignUpDto) {
    const user = await this.user.find_one(undefined, {
      where: {
        email: body.email,
      },
    });
    if (user)
      throw new ConflictException(
        'O e-mail informado já está cadastrado em nosso sistema. Por favor, utilize outro e-mail.',
      );
    const data = await this.user.create(body);
    return await this.auth.sign_in(data);
  }

  async sign_in(body: SigninDto) {
    const user = await this.user.find_one(undefined, {
      where: {
        email: body.email,
      },
    });
    if (!user)
      throw new NotFoundException(
        'O e-mail informado não foi encontrado em nosso sistema. Por favor, verifique e tente novamente.',
      );
    const is_valid_pass = await this.hash.compare(body.password, user.password);
    if (!is_valid_pass)
      throw new NotFoundException(
        'As senhas não coincidem. Por favor, tente novamente.',
      );
    return await this.auth.sign_in(user);
  }
}

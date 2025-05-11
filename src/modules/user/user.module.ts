import { Module } from '@nestjs/common';
import { UserService, UserRepository, UserController } from './';
import { HashService } from 'src/services';
import { UserRouter } from './user.router';
const providers = [UserService, UserController, UserRepository]
@Module({
  providers: [...providers, HashService],
  exports: providers,
  controllers: [UserRouter]
})
export class UserModule { }

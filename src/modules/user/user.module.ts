import { Module } from '@nestjs/common';
import { UserService, UserRepository, UserController } from './';
import { HashService, HistoryModule } from 'src/services';
import { UserRouter } from './user.router';
const providers = [UserService, UserController, UserRepository]
@Module({
  providers: [...providers, HashService],
  exports: providers,
  imports: [HistoryModule],
  controllers: [UserRouter]
})
export class UserModule { }

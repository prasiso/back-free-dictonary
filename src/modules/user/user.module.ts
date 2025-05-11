import { Module } from '@nestjs/common';
import { UserService, UserRepository } from './';
import { HashService } from 'src/services';
const providers = [UserService, UserRepository]
@Module({
  providers: [...providers, HashService],
  exports: providers
})
export class UserModule {}

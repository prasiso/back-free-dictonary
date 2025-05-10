import { Module } from '@nestjs/common';
import { AuthRouter } from '.';
import { AuthController } from '.';
import { UserModule } from '../user/user.module';


@Module({
  controllers: [AuthRouter],
  providers: [AuthController],
  imports: [UserModule]
})
export class AuthModule {}

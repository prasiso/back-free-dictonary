import { Module } from '@nestjs/common';
import { HealthModule, AuthModule, UserModule } from './modules';
import { PrismaModule } from './database/prisma.module';
import { JwtModule } from './services';

@Module({
  imports: [HealthModule, UserModule, AuthModule, PrismaModule, JwtModule],
})
export class AppModule {}

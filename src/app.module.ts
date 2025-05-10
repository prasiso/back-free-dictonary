import { Module } from '@nestjs/common';
import { HealthModule, AuthModule, UserModule } from './modules';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [HealthModule, UserModule, AuthModule, PrismaModule],
})
export class AppModule {}

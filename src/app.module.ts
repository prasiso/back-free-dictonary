import { Module } from '@nestjs/common';
import { HealthModule, AuthModule, UserModule } from './modules';
import { PrismaModule } from './database/prisma.module';
import { JwtModule } from './services';
import { AuthGuard } from './guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [HealthModule, UserModule, AuthModule, PrismaModule, JwtModule],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }
  ]
})
export class AppModule {}

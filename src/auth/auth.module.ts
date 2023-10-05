import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './role.guard';
import { AuthGuard } from './auth.guard';

@Module({
  providers: [
    AuthService,
    { provide: APP_GUARD, useClass: AuthGuard },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      global: true,
      secret: 'SECRET',
    }),
  ],
})
export class AuthModule {}

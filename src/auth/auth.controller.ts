import { Controller, Post, UseGuards } from '@nestjs/common';
import { Roles } from './role.decorator';
import { Role } from '@prisma/client';
import { AuthGuard } from './auth.guard';
@Controller('auth')
export class AuthController {
  constructor() {}
  @Post()
  @Roles(Role.ADMIN)
  @UseGuards(AuthGuard)
  test() {}
}

import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PasswordService } from 'src/password/password.service';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  imports: [PasswordService, PrismaService],

  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }

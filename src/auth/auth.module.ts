import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { PrismaModule } from 'src/prisma/prisma.module';
import { PasswordModule } from 'src/password/password.module';
@Module({
  imports: [ PrismaModule,PasswordModule],

  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }

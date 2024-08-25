import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PasswordService } from './password/password.service';
import { PasswordModule } from './password/password.module';

@Module({
  imports: [AdminModule, PrismaModule, AuthModule, PasswordModule],
  controllers: [AppController],
  providers: [AppService, PasswordService],
})
export class AppModule {}

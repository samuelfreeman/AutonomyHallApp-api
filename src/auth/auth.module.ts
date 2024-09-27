import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PasswordModule } from 'src/password/password.module';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports:[PrismaModule,PasswordModule, JwtModule.register({
    secret:process.env.JWT_SECRET,
    signOptions:{expiresIn:'1h'}
  }),],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}

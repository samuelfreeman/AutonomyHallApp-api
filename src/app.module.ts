import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { PasswordService } from './password/password.service';
import { PasswordModule } from './password/password.module';
import { ConfigModule } from '@nestjs/config';
import { StudentModule } from './student/student.module';
import { HallModule } from './hall/hall.module';
import { RoomRequestModule } from './room-request/room-request.module';
import { RoomsModule } from './rooms/rooms.module';
import { AllocationModule } from './allocation/allocation.module';
@Module({
  imports: [
    AdminModule,
    PrismaModule,
    AuthModule,
    PasswordModule,
    ConfigModule.forRoot(),
    StudentModule,
    HallModule,
    RoomRequestModule,
    RoomsModule,
    AllocationModule,
  ],
  controllers: [AppController],
  providers: [AppService, PasswordService],
})
export class AppModule {}

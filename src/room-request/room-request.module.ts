import { Module } from '@nestjs/common';
import { RoomRequestService } from './room-request.service';
import { RoomRequestController } from './room-request.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  controllers: [RoomRequestController],
  providers: [RoomRequestService],
})
export class RoomRequestModule {}

import { Injectable } from '@nestjs/common';
import { CreateRoomRequestDto } from './dto/create-room-request.dto';
import { UpdateRoomRequestDto } from './dto/update-room-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class RoomRequestService {
  constructor(private readonly prisma: PrismaService
  ) { }
  create(createRoomRequestDto: CreateRoomRequestDto) {
    return this.prisma.roomRequest.create({
      data: createRoomRequestDto
    })
  }

  findAll() {
    return this.prisma.roomRequest.groupBy({
      by: ['status', 'StudentId'],


    });
  }

  findOne(id: string) {
    return this.prisma.roomRequest.findUnique({
      where: {
        id
      },
      include: {
        student: true
      }
    });
  }

  update(id: string, updateRoomRequestDto: UpdateRoomRequestDto) {
    return this.prisma.roomRequest.update({
      where: {
        id
      },
      data: updateRoomRequestDto
    });
  }

  remove(id: string) {
    return this.prisma.roomRequest.delete({
      where: {
        id
      }
    })
  }
}

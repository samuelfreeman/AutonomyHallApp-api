import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class RoomsService {
  constructor(private readonly prisma: PrismaService) { }
  create(createRoomDto: CreateRoomDto) {
    return this.prisma.rooms.create({
      data: createRoomDto,
    });
  }

  findAll() {
    return this.prisma.rooms.findMany({
      orderBy: [
        { createdAt: 'desc' }
      ]
      , include: {
        allocation: {
          include: {
            student: true
          }
        }
      }
    });
  }

  findOne(id: string) {
    return this.prisma.rooms.findUnique({
      where: {
        id
      }
    })
  }

  update(id: string, updateRoomDto: UpdateRoomDto) {
    return this.prisma.rooms.update({
      where: {
        id
      }
      ,
      data: updateRoomDto
    })
  }

  remove(id: string) {
    return this.prisma.rooms.delete({
      where: {
        id
      }
    })
  }
}

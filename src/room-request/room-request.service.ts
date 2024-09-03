import { Injectable } from '@nestjs/common';
import { CreateRoomRequestDto } from './dto/create-room-request.dto';
import { UpdateRoomRequestDto } from './dto/update-room-request.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomRequestService {
  constructor(private readonly prisma: PrismaService
  ) { }
  async create(createRoomRequestDto: CreateRoomRequestDto) {

    try {
      // * search for available rooms 
      const room = await this.prisma.rooms.findFirst({
        where: {
          status: {
            not: 'Occupied'
          }
        }
      })

      //  !if there are no rooms we throw error 
      if (!room) {
        throw new Error('No available rooms')
      }
      //  *we allocate room to students
      //  *create a new allocation with the roomid and the student id
      await this.prisma.allocation.create({
        data: {
          roomsId: room.id,
          studentId: createRoomRequestDto.StudentId

        }
      })
      // * increase the number of allocations in the room entity 
      await this.prisma.rooms.update({
        where: {
          id: room.id
        },
        data: {
          numberOfAllocations: room.numberOfAllocations + 1
        }
      })

      // *update  the rooms with number of allocation 4 to occupied
      await this.prisma.rooms.updateMany({
        where: {
          numberOfAllocations: 4
        },
        data: {
          status: 'Occupied'
        }
      })


      //  *Approve the request 
      return this.prisma.roomRequest.create({
        data: {
          status: 'Approved',
          StudentId: createRoomRequestDto.StudentId
        }
      })

    } catch (error) {
      console.log(error)
    }
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

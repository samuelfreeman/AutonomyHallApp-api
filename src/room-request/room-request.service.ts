import { Injectable } from '@nestjs/common';
import { CreateRoomRequestDto } from './dto/create-room-request.dto';
import { UpdateRoomRequestDto } from './dto/update-room-request.dto';

@Injectable()
export class RoomRequestService {
  create(createRoomRequestDto: CreateRoomRequestDto) {
    return 'This action adds a new roomRequest';
  }

  findAll() {
    return `This action returns all roomRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roomRequest`;
  }

  update(id: number, updateRoomRequestDto: UpdateRoomRequestDto) {
    return `This action updates a #${id} roomRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} roomRequest`;
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomRequestService } from './room-request.service';
import { CreateRoomRequestDto } from './dto/create-room-request.dto';
import { UpdateRoomRequestDto } from './dto/update-room-request.dto';

@Controller('room-request')
export class RoomRequestController {
  constructor(private readonly roomRequestService: RoomRequestService) { }

  @Post()
  create(@Body() createRoomRequestDto: CreateRoomRequestDto) {
    return this.roomRequestService.create(createRoomRequestDto);
  }

  @Get()
  findAll() {
    return this.roomRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomRequestService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomRequestDto: UpdateRoomRequestDto) {
    return this.roomRequestService.update(id, updateRoomRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomRequestService.remove(id);
  }
}

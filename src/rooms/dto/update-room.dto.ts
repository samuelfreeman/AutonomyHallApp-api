import { PartialType } from '@nestjs/swagger';
import { CreateRoomDto } from './create-room.dto';
import { RoomStatus } from './create-room.dto';
export class UpdateRoomDto extends PartialType(CreateRoomDto) {
    id?: string;
    roomnumber?: number;
    status?: RoomStatus;
    hallId?: string;
    blockname?: string;


}

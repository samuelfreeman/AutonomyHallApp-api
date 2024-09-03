import { PartialType } from '@nestjs/swagger';
import { CreateRoomRequestDto } from './create-room-request.dto';
import { RequestStatus } from './create-room-request.dto';
export class UpdateRoomRequestDto extends PartialType(CreateRoomRequestDto) {
    id?: string
    StudentId?: string;
    status?: RequestStatus;
}


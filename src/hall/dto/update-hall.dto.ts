import { PartialType } from '@nestjs/swagger';
import { CreateHallDto } from './create-hall.dto';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateHallDto extends PartialType(CreateHallDto) {
    @ApiProperty({
        example: '5f9875d6277706537c479690',
        required: false,

    })
    id?: string;
    @ApiProperty({
        example: 'Hall of Science',
        required: false,
    })
    name?: string;
    @ApiProperty({
        example: 'East',
        required: false,
    })
    location?: string;

}

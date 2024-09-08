import { PartialType } from '@nestjs/swagger';
import { CreateAllocationDto } from './create-allocation.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class UpdateAllocationDto extends PartialType(CreateAllocationDto) {
    @ApiProperty({
        example: "52210408439",
        required: false
    })
    @IsNotEmpty()
    @IsString()
    roomsId?: string;
    @ApiProperty({
        example: "suffisticatied room Id string",
        required: false
    })
    @IsNotEmpty()
    @IsString()
    studentId?: string;
}

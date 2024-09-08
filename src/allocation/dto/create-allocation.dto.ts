import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty } from "class-validator";


export class CreateAllocationDto {

    @ApiProperty({
        example: "52210408439",
        required: true
    })
    @IsNotEmpty()
    @IsString()
    studentId: string
    @ApiProperty({
        example: "suffisticatied room Id string",
        required: true
    })
    @IsNotEmpty()
    @IsString()
    roomsId: string
}

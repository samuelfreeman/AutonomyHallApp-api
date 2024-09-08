import { IsString, IsArray } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
export class CreateHallDto {
    @ApiProperty({
        example: "Hall of Science",
        required: true,

    })
    @IsString()
    name: string;
    @ApiProperty({
        example: ["East"],
        required: true,
    })
    @IsString()
    location: string;

}

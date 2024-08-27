import { IsString, IsArray } from "class-validator";

export class CreateHallDto {

    @IsString()
    name: string;
    @IsString()
    location: string;

}

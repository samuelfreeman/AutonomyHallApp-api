import { IsString, IsOptional, IsEmail, IsStrongPassword } from "class-validator";


export class signInAdminDto {


    @IsEmail()
    email: string

    @IsStrongPassword()
    password: string

    @IsOptional()
    @IsString()
    telephone?: string

}

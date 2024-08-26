import {
  IsString,
  IsOptional,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

export class CreateAdminDto {
  @IsString()
  fullname: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;

  @IsOptional()
  @IsString()
  telephone?: string;
}

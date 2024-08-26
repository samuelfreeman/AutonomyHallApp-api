import {
  IsString,
  IsOptional,
  IsEmail,
  IsStrongPassword,
  IsInt,
  IsPhoneNumber,

} from 'class-validator';

export class signInAdminDto {
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
  @IsOptional()
  @IsString()
  telephone?: string;
}


export class signInStudentDto {
  @IsInt()
  studentId: number;
  @IsStrongPassword()
  password: string;
  @IsPhoneNumber('GH')
  telephone: string;
}

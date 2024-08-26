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
  @IsString()
  studentId: string;
  @IsStrongPassword()
  password: string;
  @IsOptional()
  @IsPhoneNumber('GH')
  telephone?: string;
}

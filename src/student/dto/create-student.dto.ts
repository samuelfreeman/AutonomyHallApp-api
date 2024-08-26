import {
  IsString,
  IsEmail,
  IsInt,
  IsStrongPassword,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';

export class CreateStudentDto {
  @IsString()
  studentId: string;
  @IsString()
  profile: string;
  @IsString()
  fullName: string;
  @IsEmail()
  @IsOptional()
  email?: string;
  @IsStrongPassword()
  password: string;
  @IsString()
  gender: string;
  @IsInt()
  level: number;
  @IsPhoneNumber('GH')
  telephone: string;
  @IsOptional()
  @IsString()
  department: string;
}

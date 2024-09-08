import {
  IsString,
  IsOptional,
  IsEmail,
  IsStrongPassword,

  IsPhoneNumber,

} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class signInAdminDto {
  @ApiProperty({
    example: 'john.doe@example.com',
    required: true,
  })
  @IsEmail()
  email: string;
  @ApiProperty({
    example: 'john.doe123!',
    required: true,
  })
  @IsStrongPassword()
  password: string;
  @ApiProperty({
    example: '+233245678901',
    required: false,
  })
  @IsOptional()
  @IsString()
  telephone?: string;
}


export class signInStudentDto {
  @ApiProperty({
    example: '52210408439',
    required: true,
  })
  @IsString()
  studentId: string;
  @ApiProperty({
    example: 'john.doe123!',
    required: true,
  })
  @IsStrongPassword()
  password: string;
  @ApiProperty({
    example: '+233245678901',
    required: false,
  })
  @IsOptional()
  @IsPhoneNumber('GH')
  telephone?: string;
}

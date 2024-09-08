import {
  IsString,
  IsOptional,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {


  @ApiProperty({
    example:'Samuel Twum Boateng',
    required:true
  })
  @IsString()
  fullname: string;
  
    @ApiProperty({
      example:'samueltest@gmail.com',
      required:true
    })


  @IsEmail()
  email: string;
  @ApiProperty({
    example:'Pass123@',
    required:true
  })
  @IsStrongPassword()
  password: string;
  @ApiProperty({
    example:'+233123456789',
    required:false
  })
  @IsOptional()
  @IsString()
  telephone?: string;
}

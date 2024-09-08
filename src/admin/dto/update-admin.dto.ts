import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAdminDto extends PartialType(CreateAdminDto) {

  @ApiProperty({
    example: 'Samuel Twum Boateng',
    required: false
  })
  fullname?: string;
  @ApiProperty({
    example: 'samueltest@gmail.com',
    required: false
  })
  email?: string;
  @ApiProperty({
    example: 'Pass@123',
    required: false
  })

  password?: string;
  @ApiProperty({
    example: '+233123456789',
    required: false
  })
  telephone?: string;
}

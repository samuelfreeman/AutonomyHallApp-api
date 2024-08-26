import {
  Controller,
  Body,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  Request,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { signInAdminDto, signInStudentDto } from './dto/signIn-admin.dto';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }
  @HttpCode(HttpStatus.OK)
  @Post('admin/login')
  signIn(@Body(ValidationPipe) signInDto: signInAdminDto) {
    return this.authService.signIn(
      signInDto.email,
      signInDto.password,
      signInDto.telephone,
    );
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }


  @HttpCode(HttpStatus.OK)
  @Post('student/login')
  signInStudent(@Body(ValidationPipe) signInDto: signInStudentDto) {
    console.info(signInDto.password)
    return this.authService.studentSignIn(
      signInDto.studentId,
      signInDto.password,
      signInDto.telephone,
    );
  }
  @UseGuards(AuthGuard)
  @Get('student/profile')
  getStudentProfile(@Request() req): any {
    return req.user;
  }

}






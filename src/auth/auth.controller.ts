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


@Controller('admin')
export class AuthController {
  constructor(private authService: AuthService) { }
  @HttpCode(HttpStatus.OK)
  @Post('login')
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
}



@Controller('student')
export class AuthStudentController {
  constructor(private authService: AuthService) { }
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body(ValidationPipe) signInDto: signInStudentDto) {
    return this.authService.studentSignIn(
      signInDto.studentId,
      signInDto.password,
      signInDto.telephone,
    );
  }
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req): any {
    return req.user;
  }
}



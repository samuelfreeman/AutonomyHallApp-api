import { Controller, Body, Post, HttpCode, HttpStatus, Get, Request, UseGuards } from '@nestjs/common';

import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { signInAdminDto } from './dto/signIn-admin.dto';


@Controller('admin')
export class AuthController {
    constructor(private authService: AuthService) { }
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: signInAdminDto) {
        return this.authService.signIn(signInDto.email, signInDto.password, signInDto.telephone)
    }
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}


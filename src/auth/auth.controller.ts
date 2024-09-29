import { Body, Controller, HttpException, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authPayloadDto } from './dto/auth.dto';
import { Request as request } from 'express'
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post('login')
    async login(@Request() req: request, @Body() authPayload: authPayloadDto) {
        req.user
        const user = this.authService.validateUser(authPayload)

        if (!user) {

            throw new HttpException('Invalid  Credentials', 401)
        }

        return user

    }
}

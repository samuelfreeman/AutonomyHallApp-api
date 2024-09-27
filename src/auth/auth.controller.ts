import { Body, Controller, HttpException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authPayloadDto } from './dto/auth.dto';
import { Request } from 'express'
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post('login')

    async login(@Request() req: Request, @Body() authPayload: authPayloadDto) {
        req.user
        const user = this.authService.validateUser(authPayload)

        if (!user) {

            throw new HttpException('Invalid  Credentials', 401)
        }

        return user

    }
}

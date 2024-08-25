import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordService } from 'src/password/password.service';
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private bcrypt: PasswordService) { }
    async signIn(email: string, pass: string): Promise<any> {
        const admin = await this.prisma.admin.findUnique({
            where: {
                email
            }
        })

        const isMatch = await this.bcrypt.comparePassword(pass, admin?.password)
        if (!isMatch) {
            throw new UnauthorizedException()
        }
        const { password, ...rest } = admin
        //  todo :generate a jwt and return it here
        // instead of the user object 
        return rest
    }



}

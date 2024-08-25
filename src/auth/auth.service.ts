import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordService } from 'src/password/password.service';
@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService, private bcrypt: PasswordService) { }
    async signIn(email: string, password: string, telephone: string): Promise<any> {
        const admin = await this.prisma.admin.findFirst({
            where: {

                OR: [{
                    email,
                    telephone
                }]
            }
        })

        const isMatch = await this.bcrypt.comparePassword(password, admin?.password)
        if (!isMatch) {
            throw new UnauthorizedException()
        }
        const { password: _, ...rest } = admin
        //  todo :generate a jwt and return it here
        // instead of the user object 
        return rest
    }



}

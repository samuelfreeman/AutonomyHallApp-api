import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordService } from 'src/password/password.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private bcrypt: PasswordService,
    private jwtService: JwtService,
  ) { }

  //  sigin in for admin 
  async signIn(
    email: string,
    password: string,
    telephone: string,
  ): Promise<any> {
    const admin = await this.prisma.admin.findFirst({
      where: {
        OR: [
          {
            email,
            telephone,
          },
        ],
      },
    });

    const isMatch = await this.bcrypt.comparePassword(
      password,
      admin?.password,
    );
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const { password: _, ...rest } = admin;
    console.info("log used var", _);
    const payload = { sub: admin.id, email: admin.email };
    const token = await this.jwtService.signAsync(payload);
    return {
      rest,
      access_token: token,
    };
  }
  //  sign In for student
  async studentSignIn(
    studentId: number,
    telephone: string,
    password: string,

  ): Promise<any> {
    const student = await this.prisma.student.findFirst({
      where: {
        OR: [
          {
            studentId,
            telephone,
          },
        ],
      },
    })


    const isMatch = await this.bcrypt.comparePassword(password, student.password)

    if (isMatch) {
      const { password: _, ...rest } = student;
      console.info("log used var", _);
      const payload = { sub: student.id, studentId: student.studentId }
      const token = await this.jwtService.signAsync(payload)
      return {
        rest,
        access_token: token
      }
    }
  }


}



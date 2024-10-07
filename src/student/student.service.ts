import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordService } from 'src/password/password.service';
import { MailService } from 'src/mail/mail.service';
@Injectable()
export class StudentService {
  constructor(
    private readonly prisma: PrismaService,
    private bcrypt: PasswordService,
    private mail: MailService,


  ) { }
  async create(createStudentDto: CreateStudentDto) {
    createStudentDto.password = await this.bcrypt.hashPassword(
      createStudentDto.password,
    );

    
    return this.prisma.student.create({

      data: createStudentDto,
    });
  }

  findAll() {
    return this.prisma.student.findMany({
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
      include: {
        hall: {
          select: {
            name: true,
          },
        },
        allocation: {
          select: {
            rooms: {
              select: {
                roomnumber: true,
              },
            },
          },
        },
      },
    });
  }

  async findByStudentId(studentId: string) {


    const user = await this.prisma.student.findUnique({
      where: { studentId },
    });
    console.log(user)

    if (!user) {
      throw new NotFoundException(`User with ID ${studentId} not found`);
    }
    return user;



  }
  findOne(id: string) {
    return this.prisma.student.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.prisma.student.update({
      where: {
        id,
      },
      data: updateStudentDto,
    });
  }



  forgotPassword(email: string) {
    return this.mail.sendMail(email, "Testing", "The nodemailer is working", ` <p>Click here to reset your password :<a href=" https:localhost:3000/resetPassword/">  Click here </a> </p>   `)

  }


  remove(id: string) {
    return this.prisma.student.delete({
      where: {
        id,
      },
    });
  }
}

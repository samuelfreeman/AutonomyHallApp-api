import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordService } from 'src/password/password.service';
@Injectable()
export class StudentService {
  constructor(
    private readonly prisma: PrismaService,
    private bcrypt: PasswordService,
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

  findByStudentId(studentId: string) {
    try {

      return this.prisma.student.findUnique({
        where: {
          studentId,
        },
        include: {
          allocation: {
            include: {
              rooms: true,
            },
          },
          roomRequest: true,
          hall: true,
        },
      });
    } catch (error) {
      console.log(error)
      throw new BadRequestException()
    }
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

  remove(id: string) {
    return this.prisma.student.delete({
      where: {
        id,
      },
    });
  }
}

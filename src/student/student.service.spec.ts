import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { PasswordService } from 'src/password/password.service';
import { MailService } from 'src/mail/mail.service';

describe('StudentService', () => {
  let service: StudentService;
  const prismaMock = {
    student: {
      findUnique: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({

      providers: [PasswordService, MailService, PrismaService,
        StudentService,
        { provide: PrismaService, useValue: prismaMock },
      ],
    }).compile();

    service = module.get<StudentService>(StudentService);
  });

  it('should throw NotFoundException if user does not exist', async () => {
    prismaMock.student.findUnique.mockResolvedValue(null);
    
    await expect(service.findByStudentId('non-existing-id')).rejects.toThrow(
      NotFoundException,
    );
    expect(prismaMock.student.findUnique).toHaveBeenCalledWith({
      where: { studentId: 'non-existing-id' },
    });
  });
});

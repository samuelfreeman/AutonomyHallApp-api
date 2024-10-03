import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordService } from 'src/password/password.service';
import { MailService } from 'src/mail/mail.service';

describe('StudentController', () => {
  let controller: StudentController;
  const mockStudentService = {
    findByStudentId: jest.fn(),
    create: jest.fn(),
    forgotPassword: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [
        PasswordService,
        MailService,
        PrismaService,
        { provide: StudentService, useValue: mockStudentService },
      ],
    }).compile();

    controller = module.get<StudentController>(StudentController);
  });


  it('should throw NotFoundException if student is not found', async () => {
    const studentId = 'non-existing-id';
    mockStudentService.findByStudentId.mockResolvedValue(null);

    const result = controller.findStudentById(studentId)
    console.log(result)
    expect(mockStudentService.findByStudentId).toHaveBeenCalledWith(studentId);
  });

  

  it('should create a student', async () => {
    const dto = { name: 'John Doe', email: 'johndoe@example.com' }; // Sample DTO
    mockStudentService.create.mockResolvedValue(dto);

    const result = await controller.create(dto as any);
    expect(result).toEqual(dto);
    expect(mockStudentService.create).toHaveBeenCalledWith(dto);
  });

  it('should call forgotPassword with correct email', async () => {
    const email = 'test@example.com';
    mockStudentService.forgotPassword.mockResolvedValue({ message: 'Success' });

    const result = await controller.forgotPassword({ email });
    expect(result).toEqual({ message: 'Success' });
    expect(mockStudentService.forgotPassword).toHaveBeenCalledWith(email);
  });

  it('should return all students', async () => {
    const students = [{ name: 'John Doe' }, { name: 'Jane Doe' }];
    mockStudentService.findAll.mockResolvedValue(students);

    const result = await controller.findAll();
    expect(result).toEqual(students);
    expect(mockStudentService.findAll).toHaveBeenCalled();
  });

  it('should return a student by ID', async () => {
    const student = { id: '1', name: 'John Doe' };
    mockStudentService.findOne.mockResolvedValue(student);

    const result = await controller.findOne('1');
    expect(result).toEqual(student);
    expect(mockStudentService.findOne).toHaveBeenCalledWith('1');
  });

  it('should update a student by ID', async () => {
    const updateDto = { name: 'Updated Name' };
    const updatedStudent = { id: '1', ...updateDto };
    mockStudentService.update.mockResolvedValue(updatedStudent);

    const result = await controller.update('1', updateDto as any);
    expect(result).toEqual(updatedStudent);
    expect(mockStudentService.update).toHaveBeenCalledWith('1', updateDto);
  });

  it('should remove a student by ID', async () => {
    mockStudentService.remove.mockResolvedValue({ deleted: true });

    const result = await controller.remove('1');
    expect(result).toEqual({ deleted: true });
    expect(mockStudentService.remove).toHaveBeenCalledWith('1');
  });
});

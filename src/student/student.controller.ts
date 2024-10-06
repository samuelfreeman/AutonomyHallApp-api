import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ForgotPassword } from './dto/forgotPass';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';
@ApiTags("Student")
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService, private readonly cloudinaryService: CloudinaryService) { }



  @Post('register')
  @UseInterceptors(FileInterceptor('profile'))
  async create(@Body(ValidationPipe) @UploadedFile(new ParseFilePipe({
    validators: [
      new MaxFileSizeValidator({ maxSize: 2000 }),
    ],
  })) file: Express.Multer.File, createStudentDto: CreateStudentDto) {


    const imageUrl = await this.cloudinaryService.uploadImage(file.path);
    if (!imageUrl) {
      throw new InternalServerErrorException("Error uploading Image")
    }
    createStudentDto.image = imageUrl.secure_url;
    return this.studentService.create(createStudentDto);

  }


  @Post('forgot-password')
  forgotPassword(@Body(ValidationPipe) checkForgotPassword: ForgotPassword) {
    return this.studentService.forgotPassword(checkForgotPassword.email);
  }

  //  implementing cache 
  // @UseInterceptors(CacheInterceptor)
  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Get('single/:studentId')


  async findStudentById(studentId: string) {
    const student = await this.studentService.findByStudentId(studentId);
    if (!student) {
      throw new NotFoundException(`Student with ID ${studentId} not found`);
    }
    return student;
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(ValidationPipe) updateStudentDto: UpdateStudentDto,
  ) {
    return this.studentService.update(id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }
}

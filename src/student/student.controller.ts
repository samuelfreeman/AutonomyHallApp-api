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
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { CacheInterceptor } from '@nestjs/cache-manager';
@ApiTags("Student")
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService  ) { }



  @Post('register')
  @UseInterceptors(FileInterceptor('file'))
  create(@Body(ValidationPipe) createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }
  //  implementing cache 
  @UseInterceptors(CacheInterceptor)
  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }

  @Get('single/:studentId')
  findStudentById(@Param('studentId') studentId: string) {
    console.log(studentId)
    return this.studentService.findByStudentId(studentId);
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

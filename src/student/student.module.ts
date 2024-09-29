import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PasswordModule } from 'src/password/password.module';
import { MailModule } from 'src/mail/mail.module';
@Module({
  imports: [PrismaModule, PasswordModule, MailModule],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}

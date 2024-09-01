import { Injectable } from '@nestjs/common';
import { CreateAllocationDto } from './dto/create-allocation.dto';
import { UpdateAllocationDto } from './dto/update-allocation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AllocationService {
  constructor(private readonly prisma: PrismaService) { }
  create(createAllocationDto: CreateAllocationDto) {
    return 'This action adds a new allocation';
  }

  findAll() {
    return this.prisma.allocation.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} allocation`;
  }

  update(id: number, updateAllocationDto: UpdateAllocationDto) {
    return `This action updates a #${id} allocation`;
  }

  remove(id: string) {
    return this.prisma.allocation.delete({
      where: {
        id
      }
    });
  }
}

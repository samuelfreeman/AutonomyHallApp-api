-- DropForeignKey
ALTER TABLE "allocation" DROP CONSTRAINT "allocation_roomsId_fkey";

-- DropForeignKey
ALTER TABLE "roomRequest" DROP CONSTRAINT "roomRequest_StudentId_fkey";

-- DropForeignKey
ALTER TABLE "rooms" DROP CONSTRAINT "rooms_hallId_fkey";

-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_hallId_fkey";

-- AlterTable
ALTER TABLE "rooms" ALTER COLUMN "hallId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "hall"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "allocation" ADD CONSTRAINT "allocation_roomsId_fkey" FOREIGN KEY ("roomsId") REFERENCES "rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_hallId_fkey" FOREIGN KEY ("hallId") REFERENCES "hall"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "roomRequest" ADD CONSTRAINT "roomRequest_StudentId_fkey" FOREIGN KEY ("StudentId") REFERENCES "student"("studentId") ON DELETE CASCADE ON UPDATE CASCADE;

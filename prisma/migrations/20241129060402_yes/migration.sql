-- DropForeignKey
ALTER TABLE `bloodrequest` DROP FOREIGN KEY `BloodRequest_patientId_fkey`;

-- AlterTable
ALTER TABLE `bloodrequest` MODIFY `patientId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `BloodRequest` ADD CONSTRAINT `BloodRequest_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

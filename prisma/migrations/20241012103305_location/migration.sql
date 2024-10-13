/*
  Warnings:

  - A unique constraint covering the columns `[locationId]` on the table `Images` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `images` DROP FOREIGN KEY `Images_tourId_fkey`;

-- AlterTable
ALTER TABLE `images` ADD COLUMN `locationId` VARCHAR(191) NULL,
    MODIFY `tourId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Images_locationId_key` ON `Images`(`locationId`);

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_tourId_fkey` FOREIGN KEY (`tourId`) REFERENCES `Tour`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Images` ADD CONSTRAINT `Images_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

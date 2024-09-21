/*
  Warnings:

  - Added the required column `isActive` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `companyId` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `Tour` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `isActive` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `company` ADD COLUMN `isActive` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `tour` ADD COLUMN `companyId` VARCHAR(191) NOT NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `isActive` BOOLEAN NOT NULL;

-- AddForeignKey
ALTER TABLE `Tour` ADD CONSTRAINT `Tour_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `imagePath` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tour` ADD COLUMN `imagePath` VARCHAR(191) NOT NULL;

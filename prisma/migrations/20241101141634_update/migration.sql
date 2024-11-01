/*
  Warnings:

  - You are about to drop the column `date` on the `touravailability` table. All the data in the column will be lost.
  - Added the required column `endDate` to the `TourAvailability` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `TourAvailability` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `touravailability` DROP COLUMN `date`,
    ADD COLUMN `endDate` DATETIME(3) NOT NULL,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL;

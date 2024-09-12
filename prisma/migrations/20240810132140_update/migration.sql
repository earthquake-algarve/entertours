/*
  Warnings:

  - You are about to drop the column `address` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `nif` on the `company` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `company` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Email]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[NIF]` on the table `Company` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Email` to the `Company` table without a default value. This is not possible if the table is not empty.
  - Added the required column `NIF` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Company_email_key` ON `company`;

-- DropIndex
DROP INDEX `Company_nif_key` ON `company`;

-- AlterTable
ALTER TABLE `company` DROP COLUMN `address`,
    DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `nif`,
    DROP COLUMN `phone`,
    ADD COLUMN `Address` VARCHAR(191) NULL,
    ADD COLUMN `Email` VARCHAR(191) NOT NULL,
    ADD COLUMN `NIF` VARCHAR(191) NOT NULL,
    ADD COLUMN `Name` VARCHAR(191) NULL,
    ADD COLUMN `Phone` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Company_Email_key` ON `Company`(`Email`);

-- CreateIndex
CREATE UNIQUE INDEX `Company_NIF_key` ON `Company`(`NIF`);

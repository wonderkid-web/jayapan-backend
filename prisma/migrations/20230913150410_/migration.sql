/*
  Warnings:

  - You are about to alter the column `jenis` on the `Obat` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - You are about to alter the column `satuan` on the `Obat` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `VarChar(191)`.
  - Added the required column `stock` to the `Obat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Obat` ADD COLUMN `stock` INTEGER NOT NULL,
    MODIFY `jenis` VARCHAR(191) NOT NULL,
    MODIFY `satuan` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Jenis` (
    `id` VARCHAR(191) NOT NULL,
    `jenis` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Satuan` (
    `id` VARCHAR(191) NOT NULL,
    `satuan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

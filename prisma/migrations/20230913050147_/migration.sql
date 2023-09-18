/*
  Warnings:

  - The primary key for the `Obat` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `harga` on the `Obat` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah` on the `Obat` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Obat` DROP PRIMARY KEY,
    DROP COLUMN `harga`,
    DROP COLUMN `jumlah`,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `TransaksiMasuk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `obatId` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `tanggal` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransaksiKeluar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `obatId` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `tanggal` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `TransaksiMasuk` ADD CONSTRAINT `TransaksiMasuk_obatId_fkey` FOREIGN KEY (`obatId`) REFERENCES `Obat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TransaksiKeluar` ADD CONSTRAINT `TransaksiKeluar_obatId_fkey` FOREIGN KEY (`obatId`) REFERENCES `Obat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

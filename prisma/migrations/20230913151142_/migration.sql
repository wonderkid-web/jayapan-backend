/*
  Warnings:

  - You are about to drop the column `tanggal` on the `TransaksiKeluar` table. All the data in the column will be lost.
  - You are about to drop the column `tanggal` on the `TransaksiMasuk` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `TransaksiKeluar` DROP COLUMN `tanggal`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `TransaksiMasuk` DROP COLUMN `tanggal`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

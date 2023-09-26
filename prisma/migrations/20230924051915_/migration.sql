-- CreateTable
CREATE TABLE `jenis` (
    `id` VARCHAR(191) NOT NULL,
    `jenis` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `obat` (
    `id` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `jenis` VARCHAR(191) NOT NULL,
    `satuan` VARCHAR(191) NOT NULL,
    `harga` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `stock` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `satuan` (
    `id` VARCHAR(191) NOT NULL,
    `satuan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaksikeluar` (
    `id` VARCHAR(191) NOT NULL,
    `obatId` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `TransaksiKeluar_obatId_fkey`(`obatId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `transaksimasuk` (
    `id` VARCHAR(191) NOT NULL,
    `obatId` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `TransaksiMasuk_obatId_fkey`(`obatId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `transaksikeluar` ADD CONSTRAINT `TransaksiKeluar_obatId_fkey` FOREIGN KEY (`obatId`) REFERENCES `obat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaksimasuk` ADD CONSTRAINT `TransaksiMasuk_obatId_fkey` FOREIGN KEY (`obatId`) REFERENCES `obat`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

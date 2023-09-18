-- CreateTable
CREATE TABLE `Obat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `harga` INTEGER NOT NULL,
    `jenis` ENUM('OBAT_KERAS', 'OBAT_RINGAN') NOT NULL,
    `satuan` ENUM('STRIP', 'BOTOL') NOT NULL,
    `created_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

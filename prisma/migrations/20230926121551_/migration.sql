-- CreateTable
CREATE TABLE "jenis" (
    "id" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,

    CONSTRAINT "jenis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obat" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,
    "satuan" TEXT NOT NULL,
    "harga" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "stock" INTEGER NOT NULL,

    CONSTRAINT "obat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "satuan" (
    "id" TEXT NOT NULL,
    "satuan" TEXT NOT NULL,

    CONSTRAINT "satuan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaksikeluar" (
    "id" TEXT NOT NULL,
    "obatId" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transaksikeluar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transaksimasuk" (
    "id" TEXT NOT NULL,
    "obatId" TEXT NOT NULL,
    "jumlah" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transaksimasuk_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "transaksikeluar_obatId_idx" ON "transaksikeluar"("obatId");

-- CreateIndex
CREATE INDEX "transaksimasuk_obatId_idx" ON "transaksimasuk"("obatId");

-- AddForeignKey
ALTER TABLE "transaksikeluar" ADD CONSTRAINT "TransaksiKeluar_obatId_fkey" FOREIGN KEY ("obatId") REFERENCES "obat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transaksimasuk" ADD CONSTRAINT "TransaksiMasuk_obatId_fkey" FOREIGN KEY ("obatId") REFERENCES "obat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

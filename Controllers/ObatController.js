import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// OBAT

export const getAllObat = async (req, res) => {
  try {
    const data = await prisma.obat.findMany();

    if (data) {
      const total = await prisma.obat.count();
      res.status(200).json({
        data,
        status: 200,
        total,
      });
    }
  } catch (e) {
    res.status(404).json({
      msg: e.message,
      status: 404,
    });
  }
};

export const createObat = async (req, res) => {
  const { id, nama, jenis, satuan, created_at } = req.body;
  try {
    const totalObat = await prisma.obat.count();

    const obat = await prisma.obat.create({
      data: { id, nama, jenis, satuan, created_at },
    });

    const currentTotalObat = await prisma.obat.count();

    if (totalObat != currentTotalObat) {
      res.status(200).json({ msg: "Obat Berhasil ditambah" });
    } else {
      throw new Error("Obat Gagal ditambah!");
    }
  } catch (e) {
    res.status(404).json({
      msg: e.message,
      status: 404,
    });
  }
};

export const deleteObatById = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await prisma.obat.delete({
      where: { id },
    });
    if (data) {
      res.status(200).json({ msg: "Obat Berhasil dihapus" });
    } else {
      throw new Error("Obat Gagal dihapus!");
    }
  } catch (e) {
    res.status(404).json({
      msg: e.message,
      status: 404,
    });
  }
};

export const updateObatById = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await prisma.obat.delete({
      where: { id },
    });
    if (data) {
      res.status(200).json({ msg: "Obat Berhasil dihapus" });
    } else {
      throw new Error("Obat Gagal dihapus!");
    }
  } catch (e) {
    res.status(404).json({
      msg: e.message,
      status: 404,
    });
  }
};

// TRANSAKSI

export const getSales = async (req, res) => {
  try {
    const data = await prisma.transaksiKeluar.findMany({ include: { obat: {
      select: {
        nama: true
      }
    } } });
    const total = await prisma.transaksiKeluar.count()
    if (data) {
        res.status(200).json({ data, total, status: 200 });
      } else {
        throw new Error("Transaksi Keluar Gagal!");
      }
  } catch (e) {
    res.status(404).json({
      msg: e.message,
      status: 404,
    });
  }
};

export const getPurchases = async (req, res) => {
  try {
    const data = await prisma.transaksiMasuk.findMany({ include: { obat: {
      select: {
        nama: true
      }
    } } });
    const total = await prisma.transaksiMasuk.count()
    if (data) {
        res.status(200).json({ data, total, status: 200 });
      } else {
        throw new Error("Transaksi Keluar Gagal!");
      }
  } catch (e) {
    res.status(404).json({
      msg: e.message,
      status: 404,
    });
  }
};

export const createSale = async (req, res) => {
  const { id, stock } = req.body;
  try {
    const data = await prisma.obat.update({
      where: { id },
      data: {
        stock: { decrement: Number(stock) },
        TransaksiKeluar: {
          create: {
            jumlah: Number(stock),
          },
        },
      },
    });
    if (data) {
      res.status(200).json({ msg: "Transaksi Keluar Berhasil" });
    } else {
      throw new Error("Transaksi Keluar Gagal!");
    }
  } catch (e) {
    res.status(404).json({
      msg: e.message,
      status: 404,
    });
  }
};

export const createPurchases = async (req, res) => {
  const { id, stock } = req.body;
  try {
    const data = await prisma.obat.update({
      where: { id },
      data: {
        stock: { increment: Number(stock) },
        TransaksiMasuk: {
          create: {
            jumlah: Number(stock),
          },
        },
      },
    });
    if (data) {
      res.status(200).json({ msg: "Transaksi Keluar Berhasil" });
    } else {
      throw new Error("Transaksi Keluar Gagal!");
    }
  } catch (e) {
    res.status(404).json({
      msg: e.message,
      status: 404,
    });
  }
};

// JENIS

export const createJenis = async (req, res) => {
  try {
    // await prisma.enum.Sat
  } catch (e) {
    res.status(404).json({
      msg: e.message,
      status: 404,
    });
  }
};

// SATUAN

export const createSatuan = async (req, res) => {
  try {
    await prisma.enum.Satuan.create({
      value: "OBAT_LUNAK",
    });
  } catch (e) {
    res.status(404).json({
      msg: e.message,
      status: 404,
    });
  }
};

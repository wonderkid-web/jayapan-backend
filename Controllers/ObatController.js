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
  const { nama, jenis, harga, stock, satuan } = req.body;
  try {
    const totalObat = await prisma.obat.count();

    const obat = await prisma.obat.create({
      data: { nama, jenis, harga: Number(harga), stock:Number(stock), satuan },
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
  const { id } = req.params;
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
    const data = await prisma.transaksikeluar.findMany({ include: { obat: {
      select: {
        nama: true
      }
    } } });
    // const total = await prisma.transaksiKeluar.count()
    if (data) {
        res.status(200).json({ data, status: 200 });
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
    const data = await prisma.transaksimasuk.findMany({ include: { obat: {
      select: {
        nama: true
      }
    } } });
    // const total = await prisma.transaksiMasuk.count()
    if (data) {
        res.status(200).json({ data, status: 200 });
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
  const { id, stock, harga } = req.body;
  try {
    const data = await prisma.obat.update({
      where: { id },
      data: {
        stock: { decrement: Number(stock) },
         transaksiKeluar: {
          create: {
            jumlah: Number(stock),
            nominal: Number(harga) * Number(stock)
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
  const { id, stock, harga } = req.body;
  try {
    const data = await prisma.obat.update({
      where: { id },
      data: {
        stock: { increment: Number(stock) },
        transaksimasuk: {
          create: {
            jumlah: Number(stock),
            nominal: Number(harga) * Number(stock)
          },
        },
      },
    });
    if (data) {
      res.status(200).json({ msg: "Transaksi masuk Berhasil" });
    } else {
      throw new Error("Transaksi Masuk Gagal!");
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


// TotalPendapatan

export const getAllReveanue = async (req, res) =>{
  try{
    const totalNominal = await prisma.transaksimasuk.aggregate({
      aggregate: {
        sum: {
          field: "nominal",
        },
      },
    });

    res.status(200).json({
      data: totalNominal
    })
   
  } catch (e) {
    res.status(404).json({
      msg: e.message,
      status: 404,
    });
  }
}

export const getAllExpense = async (req, res) =>{
  try{
    const totalNominal = await prisma.transaksiKeluar.aggregate({
      aggregate: {
        sum: {
          field: "nominal",
        },
      },
    });

    res.status(200).json({
      data: totalNominal
    })
   
  } catch (e) {
    res.status(404).json({
      msg: e.message,
      status: 404,
    });
  }
}

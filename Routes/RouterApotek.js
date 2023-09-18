import express from "express"
import {
    getAllObat,
    createJenis,
    createSatuan,
    createObat,
    deleteObatById,
    createSale,
    createPurchases,
    getSales,
    getPurchases
} from "../Controllers/ObatController.js"

const router = express.Router()

// Obat
router.get('/obat', getAllObat)
router.post('/obat', createObat)
router.delete('/obat', deleteObatById)

// Transaksi Masuk
router.get('/purchases', getPurchases)
router.post('/purchase', createPurchases)

// Transaksi Keluar
router.get('/sales', getSales)
router.post('/sale', createSale)

// Jenis
router.post('/jenis', createJenis)

// Satuan
router.post('/satuan', createSatuan)


export default router
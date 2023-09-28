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
    getPurchases,
    getAllReveanue
} from "../Controllers/ObatController.js"

const router = express.Router()

// Obat
router.get('/obat', getAllObat)
router.post('/obat', createObat)
router.delete('/obat/:id', deleteObatById)

// Transaksi Masuk
router.get('/purchases', getPurchases)
router.patch('/purchase', createPurchases)

// Transaksi Keluar
router.get('/sales', getSales)
router.patch('/sale', createSale)

// Jenis
router.post('/jenis', createJenis)

// Satuan
router.post('/satuan', createSatuan)

// TotalPendapatan
router.get('/reveanue', getAllReveanue)



export default router

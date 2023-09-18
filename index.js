import express from 'express'
import cors from 'cors'
import router from './Routes/RouterApotek.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(router)


app.listen(3000, ()=>{
    console.log('Server kamu sudah berjalan di port 3000')
})
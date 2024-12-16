import express from 'express'
import connectedDb from './config/db.js'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/users', userRoutes)
app.get('/', (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`The Port is running on ${PORT}`)
    connectedDb()
})
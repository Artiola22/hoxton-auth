import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())
const PORT = 4000

const prisma = new PrismaClient({ log: ["query", "warn", "error", "info"] })



// app.post('/sign-up', async(req, res )=> {
//     const {fullName, email, password} = req.body
//     try{
// const hash = bcryptjs.hashSync(password, 8)
// const user = await prisma.user.create({
//     data: {
//         fullName: fullName,
//         email: email,
//         password: hash
//     }
// })
//     }catch(err){

//     }
// })


app.listen(PORT, ()=> {
    console.log(`Server up: http://localhost:${PORT}`)
})
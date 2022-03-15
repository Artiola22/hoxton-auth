
import { PrismaClient } from "@prisma/client";
import bcryptjs from 'bcryptjs'
const prisma = new PrismaClient({ log: ["query", "warn", "error", "info"] })

const users = [
    {
    fullName : "Artiola",
    email: "artiola@email.com",
    amountInAccount : 500,
    password: bcryptjs.hashSync('artiola', 8),
    transactions: {
        create: { 
                amount: 50,
                currency: 'euro',
                receiverOrSender: 'sender',
                completedAt: '01/03/2022',
                isPositive: true
        }
    }

    }
]

async function createStuff(){
    for(const user of users){
        await prisma.user.create({ data: user})
    }
}
createStuff()
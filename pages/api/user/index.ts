import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST'){
        return res.status(405).json({message: 'Method not allowed'});
    }

    const user = req.body.name;

    const findUser = await prisma.user.findFirst({
        where: {
          name: `${user}`,
        }
      })

    if(findUser != null){
        console.log("exist");
        res.json("exist");
    }

    else{
        const savedUser = await prisma.user.create({
            data: req.body,
        })
    
        res.status(200).json(savedUser)
    }
    
}
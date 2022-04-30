import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST'){
            return res.status(405).json({message: 'Method not allowed'});
        }



    const savedEducation = await prisma.education.create({
        data: req.body,
        include: {author: true},
    })

    res.status(200).json(savedEducation)
}

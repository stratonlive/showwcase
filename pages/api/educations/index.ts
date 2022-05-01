import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST'){
            return res.status(405).json({message: 'Method not allowed'});
        }

    const checkEducation = await prisma.education.findFirst({
        where: {
            schoolname: req.body.schoolname,
            degree: req.body.degree,
            major: req.body.major,
        }
        })

    if(checkEducation != null){
        console.log("exist");
        res.json("exist");
    }

    else {
        const savedEducation = await prisma.education.create({
            data: req.body,
            include: {author: true},
        })
    
        res.status(200).json(savedEducation)
    } 

}

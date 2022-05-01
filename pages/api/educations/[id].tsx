import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const education = req.query;
    const eduId = education.id;

    const deleteUser = await prisma.education.delete({
        where: {
            id: `${eduId}`,
        },
        })

    res.status(200).json("success")

}

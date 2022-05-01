import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const username = req.query;
    const user = username.user;
 
    const findUser = await prisma.user.findFirst({
        where: {
          name: `${user}`,
        },
        include: {
          educations: true,
        },
      })

    res.status(200).json(findUser)

}
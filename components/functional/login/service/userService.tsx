import axios from 'axios'
import User from '../../../types/user'
import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient();

const url = "/api/user";

// export const checkUser = async (data : User) => {

//     const username = await prisma.user.findFirst({
//         where: {
//           name: data.name,
//         },
//       })

//       if (username != null){
//           return username;
//       }

//       else{
//         userCreate(data);
//       }
// }

export const userCreate = async (data: User) => {

    
    const body = data;

    try{
        let data = await axios.post(url, body).then((res: { data: any; }) => {
            return res.data;
        })

        return data;
    }
    catch (e){
        console.log(e);
    }
};

import axios from 'axios'
import User from '@components/types/user'

const url = "/api/user";

export const userCreate = async (data: User) => {

    
    const body = data;

    try{
        let data = await axios.post(url, body).then((res: { data: User; }) => {
            return res.data;
        })

        return data;
    }
    catch (e){
        console.log(e);
    }
};

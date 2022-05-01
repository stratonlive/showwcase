import axios from 'axios'
import User from '../../../types/user'

const url = "/api/user";

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

import axios from 'axios'
import Education from '../../../types/education'


const url = "/api/education";

export const educationCreate = async (data: Education) => {

    
    const body = data;
    console.log(body);

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

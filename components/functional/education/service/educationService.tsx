import axios from 'axios'
import Education from '../../../types/education'


const url = "api/educations";

export const educationCreate = async (data: Education) => {

    
    const body = data;

    try{
        let data = await axios.post(url, body).then((res: { data: Education; }) => {
            return res.data;
        })

        return data;
    }
    catch (e){
        console.log(e);
    }
};

export const educationDelete = async (data: Education) => {

    const deleteUrl =url +"/"+  data 
    console.log(deleteUrl); 

    try{
        let data = await axios.delete(deleteUrl).then((res: { data: Education; }) => {
            return res.data;
        })

        return data;
    }
    catch (e){
        console.log(e);
    }
};

import axios from 'axios'

const school_github = "https://github.com/Hipo/university-domains-list-api";

export const schoollist = async (str :string) => {

    let searchschool = str.replace(/,/g, "");
    const url = "http://universities.hipolabs.com/search?name=" +searchschool;

    try{
        let data = await axios.get(url).then((res: { data: any; }) => {
            return res.data;
        })

        return data;
    }
    catch (e){
        console.log(e);
    }
};

export default schoollist;
import axios from 'axios'
import User from '@components/types/user';

const default_url = process.env.DEFAULT_URL

export const SSRuserFetching = async (username: string) => {

    const url = default_url+"api/user/" +`${username}`;

    //Because env only can be access locally and does not work with jest test. Use below for_testing_url to test jest !!!
    //SSR fetching requirement full url
    const for_testing_url = "http://localhost:3000/api/user/" +`${username}`;

    let data = await axios.get(url).then((res: { data: User; }) => {
        return res.data;
      });

    return data;
};

export const userFetching = async (username: string) => {

    const url = "api/user/" +`${username}`;

    let data = await axios.get(url).then((res: { data: User; }) => {
        return res.data;
      });

    return data;
};


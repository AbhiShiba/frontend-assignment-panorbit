import axios from 'axios';

async function Axios (URL) {
    try{
        const response = axios.get(URL);
        return response;
    } catch (error) {
        throw new Error(error);
    }
}

export default Axios;
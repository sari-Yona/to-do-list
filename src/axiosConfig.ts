import axios from 'axios';

const instance = axios.create();

instance.interceptors.response.use(
    response => response,
    error => {        
        return { error: true, message: error.message };
    }
);

export default instance;

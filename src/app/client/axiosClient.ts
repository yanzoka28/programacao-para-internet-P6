import axios, {AxiosInstance} from 'axios';

const httpClient : AxiosInstance = axios.create({

    baseURL: "http://localhost:8082"
})

export default httpClient;
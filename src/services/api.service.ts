import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type': 'application/json'}
});


export const getAll = async <T> (endpoint: string) => {
    const axiosResponse = await axiosInstance.get<T>(endpoint);
    return axiosResponse.data;
}
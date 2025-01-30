import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

const axiosInstance = axios.create({
    baseURL: `${baseUrl}`,
    headers: {'Content-Type': 'application/json'}
});


export const getAll = async <T> (endpoint: string) => {
    const axiosResponse = await axiosInstance.get<T>(endpoint);
    return axiosResponse.data;
};

export const getAllForPagination = async <T, >(endpoint: string, page: string): Promise<T> => {
    const limit = 30;
    const skip = limit * (+page) - limit;

    return await fetch(`${baseUrl}${endpoint}${skip}`).then(res => res.json());
}
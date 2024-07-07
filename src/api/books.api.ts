import { httpClient } from "./http"

export const getFavoriteBooks = async () => {
    try {
        const response = await httpClient.get('/home/favorites');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getReadingBooks = async () => {
    try {
        const response = await httpClient.get('/home/readingBooks');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getFinishedBooks = async () => {
    try {
        const response = await httpClient.get('/home/finishedBooks');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
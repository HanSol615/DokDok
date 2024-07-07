import { Book } from "../models/model";
import { httpClient } from "./http"

interface GetBooksResponse {
    books: Book;
};

export const getFavoriteBooks = async () => {
    try {
        const response = await httpClient.get<GetBooksResponse>('/home/favorites');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getReadingBooks = async () => {
    try {
        const response = await httpClient.get<GetBooksResponse>('/home/readingBooks');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};

export const getFinishedBooks = async () => {
    try {
        const response = await httpClient.get<GetBooksResponse>('/home/finishedBooks');
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
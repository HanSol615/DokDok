import { Book } from "../models/model";
import { httpClient } from "./http";

interface SearchBooksParams {
    title: string;
};

export const getFavoriteBooks = async () => {
    const response = await httpClient.get<Book[]>('/home/favorites');
    return response.data;
};

export const getReadingBooks = async () => {

    const response = await httpClient.get<Book[]>('/home/readingBooks');
    return response.data || [];
};

export const getFinishedBooks = async () => {
    const response = await httpClient.get<Book[]>('/home/finishedBooks');
    return response.data || [];
};

export const searchBooks = async ({ title }: SearchBooksParams) => {
    const response = await httpClient.get<Book[]>('/book/search', {
        params: { title }
    });
    return response.data;
};
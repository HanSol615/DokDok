import { Book, BooksResponse } from "../models/model";
import { httpClient } from "./http";

interface SearchBooksParams {
    title: string;
};

export const getFavoriteBooks = async () => {
    const response = await httpClient.get<BooksResponse>('/home/favorites');
    return response.data || [];
};

export const getReadingBooks = async () => {
    const response = await httpClient.get<BooksResponse>('/home/readingBooks');
    return response.data || [];
};

export const getFinishedBooks = async () => {
    const response = await httpClient.get<BooksResponse>('/home/finishedBooks');
    return response.data || [];
};

export const searchBooks = async ({ title }: SearchBooksParams) => {
    const response = await httpClient.get<Book[]>('/book/search', {
        params: { title }
    });
    return response.data || [];
};

export const addBookFavorite = async (isbn: string) => {
    const response = await httpClient.post('/book/like', { isbn });
    return response.data;
};

export const addBookReading = async (book: Book): Promise<string> => {
    const response = await httpClient.put<string>('/book/select', book);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error('Unexpected response code');
    };
};

export const addBookFinished = async (isbn: string) => {
    const response = await httpClient.post<boolean>('/book/finishReading', { isbn });
    return response.data;
};
import { BookDetail } from "../models/model";
import { httpClient } from "./http";

export const getBookDetail = async (isbn: string) => {
    const response = await httpClient.get<BookDetail>('/book/detail', { params: { isbn: isbn } });
    return response.data || [];
};
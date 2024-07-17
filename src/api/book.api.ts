import { wait } from "@testing-library/user-event/dist/utils";
import { BookDetail, BookRemind, BookRemindResponse, BookReview, BookReviewResponse, ChangeBookDate, ChangeBookDateResponse, DeleteBookRemind } from "../models/model";
import { httpClient } from "./http";

export const getBookDetail = async (isbn: string) => {
    const response = await httpClient.get<BookDetail>('/book/detail', { params: { isbn: isbn } });
    return response.data;
};

export const postBookReview = async (body: BookReview) => {
    const response = await httpClient.post<BookReviewResponse>('/book/review', body);
    return response.data;
}

export const postBookRemind = async (body: BookRemind) => {
    const response = await httpClient.put<BookRemindResponse>('/book/remind', body);
    return response.data;
};

export const deleteBook = async (isbn: string) => {
    const response = await httpClient.delete('/book/deletebook', { data: { isbn } });
    return response.data;
};

export const deleteBookRemind = async (body: DeleteBookRemind) => {
    const response = await httpClient.delete('/book/deleteRemind', { data: body });
    return response.data;
};

export const postChangeDate = async (body: ChangeBookDate) => {
    const response = await httpClient.post<ChangeBookDateResponse>('/book/changeDate', { data: body });
    return response.data;
};
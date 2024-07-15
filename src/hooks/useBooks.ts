import { useEffect, useState, useCallback } from "react";
import { Book } from "../models/model";
import { addBookFavorite, addBookFinished, addBookReading, getFavoriteBooks, getFinishedBooks, getReadingBooks } from "../api/books.api";

export const useBooks = () => {
    const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);
    const [favoriteBooksCount, setFavoriteBooksCount] = useState<number>(0);
    const [readingBooks, setReadingBooks] = useState<Book[]>([]);
    const [readingBooksCount, setReadingBooksCount] = useState<number>(0);
    const [finishedBooks, setFinishedBooks] = useState<Book[]>([]);
    const [finishedBooksCount, setFinishedBooksCount] = useState<number>(0);

    const fetchFavoriteBooks = useCallback(async () => {
        try {
            const response = await getFavoriteBooks();
            setFavoriteBooks(response.books);
            setFavoriteBooksCount(response.count);
        } catch (error) {
            console.error("즐겨찾기 책 정보를 가져오는 중 오류가 발생했습니다:", error);
        }
    }, []);

    const fetchReadingBooks = useCallback(async () => {
        try {
            const response = await getReadingBooks();
            setReadingBooks(response.books);
            setReadingBooksCount(response.count);
        } catch (error) {
            console.error("읽는 중인 책 정보를 가져오는 중 오류가 발생했습니다:", error);
        }
    }, []);

    const fetchFinishedBooks = useCallback(async () => {
        try {
            const response = await getFinishedBooks();
            setFinishedBooks(response.books);
            setFinishedBooksCount(response.count);
        } catch (error) {
            console.error("읽은 책 정보를 가져오는 중 오류가 발생했습니다:", error);
        }
    }, []);

    useEffect(() => {
        fetchFavoriteBooks();
        fetchReadingBooks();
        fetchFinishedBooks();
    }, [fetchFavoriteBooks, fetchReadingBooks, fetchFinishedBooks]);

    const addFavorite = async (isbn: string) => {
        const response = await addBookFavorite(isbn);
        if (response.bookLikeStatus) {
            alert('즐겨찾기에 추가되었습니다.');
        } else {
            alert('즐겨찾기에서 제거되었습니다.');
        }
        fetchFavoriteBooks();
    };

    const addReading = async (book: Book) => {
        await addBookReading(book);
        alert('읽는 중 책에 추가되었습니다.');
        fetchReadingBooks();
    };

    const addFinished = async (isbn: string) => {
        await addBookFinished(isbn);
        alert('읽은 책에 추가되었습니다.');
        fetchFinishedBooks();
    };

    return { favoriteBooks, favoriteBooksCount, readingBooks, readingBooksCount, finishedBooks, finishedBooksCount, addFavorite, addReading, addFinished };
};

import { useEffect, useState } from "react"
import { Book, BooksResponse } from "../models/model"
import { addBookFavorite, addBookFinished, addBookReading, getFavoriteBooks, getFinishedBooks, getReadingBooks } from "../api/books.api";

export const useBooks = () => {
    const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);
    const [favoriteBooksCount, setFavoriteBooksCount] = useState<number>(0);
    const [readingBooks, setReadingBooks] = useState<Book[]>([]);
    const [readingBooksCount, setReadingBooksCount] = useState<number>(0);
    const [finishedBooks, setFinishedBooks] = useState<Book[]>([]);
    const [finishedBooksCount, setFinishedBooksCount] = useState<number>(0);

    useEffect(() => {
        getFavoriteBooks().then((response) => {
            setFavoriteBooks(response.books);
            setFavoriteBooksCount(response.count);
        });
        getReadingBooks().then((response) => {
            setReadingBooks(response.books);
            setReadingBooksCount(response.count);
        });
        getFinishedBooks().then((response) => {
            setFinishedBooks(response.books);
            setFinishedBooksCount(response.count);
        });
    }, []);

    const addFavorite = async (isbn: string) => {
        const response = await addBookFavorite(isbn);
        if (response.bookLikeStatus) {
            alert('즐겨찾기에 추가되었습니다.');
        } else {
            alert('즐겨찾기에서 제거되었습니다.');
        }
    };

    const addReading = (book: Book) => {
        addBookReading(book).then(() => {
            alert('읽는 중 책에 추가되었습니다.');
        });
    };

    const addFinished = (isbn: string) => {
        addBookFinished(isbn).then(() => {
            alert('읽은 책에 추가되었습니다.');
        });
    };

    return { favoriteBooks, favoriteBooksCount, readingBooks, readingBooksCount, finishedBooks, finishedBooksCount, addFavorite, addReading, addFinished };
};
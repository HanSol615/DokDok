import { useEffect, useState } from "react"
import { Book } from "../models/model"
import { getFavoriteBooks, getFinishedBooks, getReadingBooks } from "../api/books.api";

export const useBooks = () => {
    const [favoriteBooks, setFavoriteBooks] = useState<Book[]>([]);
    const [readingBooks, setReadingBooks] = useState<Book[]>([]);
    const [finishedBooks, setFinishedBooks] = useState<Book[]>([]);

    useEffect(() => {
        getFavoriteBooks().then((books) => {setFavoriteBooks(books)});
        getReadingBooks().then((books) => {setReadingBooks(books)});
        getFinishedBooks().then((books) => {setFinishedBooks(books)});
    }, [])

    return { favoriteBooks, readingBooks, finishedBooks };
}
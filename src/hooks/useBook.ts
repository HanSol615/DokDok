import { useEffect, useState } from "react"
import { BookDetail } from "../models/model";
import { getBookDetail } from "../api/book.api";

export const useBook = (id: string | undefined) => {
    const [bookDetail, setBookDetail] = useState<BookDetail | undefined>();

    useEffect(() => {
        if (id) {
            getBookDetail(id).then((response) => {
                setBookDetail(response);
            });
        }
    }, [id]);

    return { bookDetail };
};
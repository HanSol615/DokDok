import { useEffect, useState } from "react"
import { BookDetail, BookRemind, BookReview, BookReviewResponse, ChangeBookDate, ChangeBookDateResponse, DeleteBookRemind } from "../models/model";
import { getBookDetail, postBookRemind, postBookReview, deleteBook, deleteBookRemind, postChangeDate } from "../api/book.api";

export const useBook = (id: string) => {
    const [bookDetail, setBookDetail] = useState<BookDetail | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBookDetail = async () => {
            const response = await getBookDetail(id);
            setBookDetail(response);
            setLoading(false);
        };

        fetchBookDetail();
    }, [id]);

    const addReview = async (body: BookReview): Promise<BookReviewResponse> => {
        try {
            const response = await postBookReview(body);
            alert('서평 작성이 완료되었습니다.');
            return response;
        } catch (error) {
            console.error('서평 작성 실패:', error);
            alert('서평 작성 중 오류가 발생했습니다.');
            throw error;
        }
    };

    const addRemind = (body: BookRemind) => {
        postBookRemind(body).then(() => {
            alert('구절 등록이 완료되었습니다.')
        });
    };

    const removeBook = (isbn: string) => {
        deleteBook(isbn).then(() => {
            alert('서재에서 해당 책이 삭제되었습니다.');
        });
    };

    const removeBookRemind = (body: DeleteBookRemind) => {
        deleteBookRemind(body).then(() => {
            alert('해당 구절이 삭제되었습니다.')
        });
    };

    const changeDate = (body: ChangeBookDate) => {
        postChangeDate(body).then((response: ChangeBookDateResponse) => {
            alert('날짜가 변경되었습니다.')
            return response;
        });
    };

    return { bookDetail, loading, addReview, addRemind, removeBook, removeBookRemind, changeDate };
};
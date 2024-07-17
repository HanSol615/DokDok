import { useEffect, useState, useCallback  } from "react"
import { BookDetail, BookRemind, BookReview, BookReviewResponse, ChangeBookDate, ChangeBookDateResponse, DeleteBookRemind } from "../models/model";
import { getBookDetail, postBookRemind, postBookReview, deleteBook, deleteBookRemind, postChangeDate } from "../api/book.api";

export const useBook = (id: string) => {
    const [bookDetail, setBookDetail] = useState<BookDetail>();
    const [reminds, setReminds] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchBookDetail = useCallback(async () => {
        setLoading(true);
        try {
            const response = await getBookDetail(id);
            setBookDetail(response);
            setReminds(response.bookRemind);
        } catch (error) {
            console.error("책 상세 정보 가져오기 실패:", error);
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchBookDetail();
    }, [fetchBookDetail]);

    const addReview = async (body: BookReview): Promise<BookReviewResponse> => {
        try {
            const response = await postBookReview(body);
            alert('서평 작성이 완료되었습니다.');
            await fetchBookDetail();
            return response;
        } catch (error) {
            console.error('서평 작성 실패:', error);
            alert('서평 작성 중 오류가 발생했습니다.');
            throw error;
        }
    };

    const addRemind = async (isbn: string, context: string) => {
        try {
            const body: BookRemind = { isbn, context };
            await postBookRemind(body);
            alert('구절 등록이 완료되었습니다.');
            await fetchBookDetail();
        } catch (error) {
            console.error('구절 등록 실패:', error);
            alert('구절 등록 중 오류가 발생했습니다.');
            throw error;
        }
    };

    const removeBook = async (isbn: string) => {
        try {
            await deleteBook(isbn);
            alert('서재에서 해당 책이 삭제되었습니다.');
            await fetchBookDetail();
        } catch (error) {
            console.error('책 삭제 실패:', error);
            alert('책 삭제 중 오류가 발생했습니다.');
            throw error;
        }
    };

    const removeBookRemind = async (isbn: string, index: number) => {
        try {
            const body: DeleteBookRemind = { isbn, index };
            await deleteBookRemind(body);
            alert('해당 구절이 삭제되었습니다.');
            await fetchBookDetail();
        } catch (error) {
            console.error('구절 삭제 실패:', error);
            alert('구절 삭제 중 오류가 발생했습니다.');
            throw error;
        }
    };

    const changeDate = async (body: ChangeBookDate) => {
        try {
            const response = await postChangeDate(body);
            alert('날짜가 변경되었습니다.');
            await fetchBookDetail();
            return response;
        } catch (error) {
            console.error('날짜 변경 실패:', error);
            alert('날짜 변경 중 오류가 발생했습니다.');
            throw error;
        }
    };

    return { bookDetail, reminds, loading, addReview, addRemind, removeBook, removeBookRemind, changeDate };
};
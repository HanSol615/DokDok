import { useParams } from "react-router-dom";
import BookInfo from "../components/book/BookInfo";
import Remind from "../components/book/Remind";
import Review from "../components/book/Review";
import { useBook } from "../hooks/useBook";
import styled from "styled-components";

const BookDetail = () => {
    const { id } = useParams<{ id: string }>();
    const { bookDetail, loading } = useBook(id || '');

    if (loading) {
        return <div>Loading...</div>;
    };

    return (
        <BookDetailStyle>
            <div className="container">
                <BookInfo bookDetail={bookDetail!}></BookInfo>
                <Review bookDetail={bookDetail!} id={id!}></Review>
                <Remind bookDetail={bookDetail!} id={id!}></Remind>
            </div>
        </BookDetailStyle>
    )
};

const BookDetailStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .container {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
`

export default BookDetail;
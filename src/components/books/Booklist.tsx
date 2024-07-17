import styled from "styled-components";
import { Book } from "../../models/model";
import BookItem from "./BookItem";
import Empty from "./Empty";

interface Props {
    books: Book[];
    count?: number;
    isFavoriteTab?: boolean;
    messageType: '즐겨찾기' | '읽는중' | '완독' | '검색결과';
}

const Booklist = ({ books, count, messageType, isFavoriteTab }: Props) => {
    if (books.length === 0) {
        return <Empty messageType={messageType} />;
    };

    console.log(books);

    return (
        <BooklistStyle>
            {books.map((item) => (
                <BookItem key={item.isbn} book={item} isFavoriteTab={isFavoriteTab} />
            ))}
        </BooklistStyle>
    );
};

const BooklistStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
`

export default Booklist;
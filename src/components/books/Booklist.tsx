import styled from "styled-components";
import { Book } from "../../models/model";
import BookItem from "./BookItem";

interface Props {
    books: Book[];
    count?: number;
    isFavoriteTab?: boolean;
}

const Booklist = ({ books, count, isFavoriteTab }: Props) => {
    if (books.length === 0) {
        console.warn('books array is empty');
        return <div>No books found</div>;
    }

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
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`

export default Booklist;
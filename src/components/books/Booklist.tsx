import styled from "styled-components";
import { Book } from "../../models/model";
import BookItem from "./BookItem";

interface Props {
    books: Book[];
}

const Booklist = ({ books = [] }: Props) => {
    if (!Array.isArray(books)) {
        console.error('books is not an array:', books);
        return null;
    }

    return (
        <BooklistStyle>
            {books.map((item) => (
                <BookItem key={item.isbn} book={item} />
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
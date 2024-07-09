import styled from "styled-components";
import { Book } from "../../models/model";
import BookItem from "./BookItem";

interface Props {
    books: Book[];
}

const Booklist = () => {
    const books = [
        {
            title: '잭과 콩나무',
            author: '박엄지',
            isbn: '1',
            image: '',
            likeStatus: true,
            readStatus: false,
        },
        {
            title: '잭과 콩나무',
            author: '박엄지',
            isbn: '2',
            image: '',
            likeStatus: true,
            readStatus: false,
        }, 
        {
            title: '잭과 콩나무',
            author: '박엄지',
            isbn: '3',
            image: '',
            likeStatus: true,
            readStatus: false,
        },
        {
            title: '잭과 콩나무',
            author: '박엄지',
            isbn: '4',
            image: '',
            likeStatus: true,
            readStatus: false,
        },
        {
            title: '잭과 콩나무',
            author: '박엄지',
            isbn: '5',
            image: '',
            likeStatus: true,
            readStatus: false,
        },
    ]

    return (
        <BooklistStyle>
            {books?.map((item) => (
                <BookItem key={item.isbn} book={item}/>
            ))}
        </BooklistStyle>
    )
};

const BooklistStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
`

export default Booklist;
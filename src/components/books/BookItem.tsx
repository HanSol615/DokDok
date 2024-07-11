import styled from "styled-components";
import { Book } from "../../models/model";
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Button from "../common/Button";
import { useBooks } from "../../hooks/useBooks";

interface Props {
    book: Book;
    isFavoriteTab?: boolean;
};

const MAX_TITLE_LENGTH = 20;

const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.substring(0, maxLength) + '...';
    }
};

const BookItem = ({ book, isFavoriteTab }: Props) => {
    const truncatedTitle = truncateText(book.title, MAX_TITLE_LENGTH);
    const { addFavorite, addReading, addFinished } = useBooks();

    const handleFavoriteClick = () => {
        addFavorite(book.isbn);
    };

    const handleReadingStartClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const { title, author, image, publisher, isbn } = book;
        addReading({ title, author, image, publisher, isbn });
    };

    const handleFinishedClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        addFinished(book.isbn);
    };

    return (
        <Link to={`/books/${book.isbn}`}>
            <BookItemStyle>
                <div className="img">
                    <img src={book.image} alt={book.title} />
                </div>
                <div className="content">
                    <div className="title-author">
                        <h3 className="title">{truncatedTitle}</h3>
                        <h4 className="author">{book.author}</h4>
                    </div>
                    <div className="buttons">
                        {isFavoriteTab ? (
                            <Button size='small' scheme='primary' onClick={handleReadingStartClick}>
                                읽기 시작
                            </Button>
                        ) : (
                            book.readStatus === false ? (
                                <Button size='small' scheme='primary' onClick={handleFinishedClick}>
                                    읽기 완료
                                </Button>
                            ) : (
                                <div>평점</div>
                            )
                        )}
                        <FaHeart onClick={handleFavoriteClick}/>
                    </div>
                </div>
            </BookItemStyle>
        </Link>
    )
};

const BookItemStyle = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    min-height: 15rem;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 25px;

    .title-author {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .img {
        img {
            width: 9rem;
            height: 12.3rem;
            border-radius: 0.2rem;
        }
    }

    .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title, .author {
        margin: 0;
    }

    .buttons {
        display: flex;
        gap: 20px;
        align-items: center;

        svg {
            font-size: 1.3rem;
            fill: red;
        }
    }
`

export default BookItem;
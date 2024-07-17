import styled from "styled-components";
import { Book } from "../../models/model";
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaStar, FaRegStar } from 'react-icons/fa';
import Button from "../common/Button";
import { useBooks } from "../../hooks/useBooks";
import { useState } from "react";

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

export const renderStars = (score: number) => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < score) {
            stars.push(<FaStar key={i} className="filled-star" />);
        } else {
            stars.push(<FaStar key={i} className="empty-star" />);
        }
    }

    return stars;
};

const BookItem = ({ book, isFavoriteTab }: Props) => {
    const [likeStatus, setLikeStatus] = useState(book.likeStatus);
    const truncatedTitle = truncateText(book.title, MAX_TITLE_LENGTH);
    const truncatedAuthor = truncateText(book.author, MAX_TITLE_LENGTH);
    const { addFavorite, addReading, addFinished } = useBooks();

    const handleFavoriteClick = (event: React.MouseEvent<SVGElement>) => {
        event.stopPropagation();
        event.preventDefault();
        setLikeStatus(!likeStatus);
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
                        <h4 className="author">{truncatedAuthor}</h4>
                    </div>
                    <div className="buttons">
                        {book.readStatus ? (
                            <div className="rating">
                                {renderStars(book.score ?? 0)}
                            </div>
                        ) : (
                            isFavoriteTab ? (
                                <Button size='small' scheme='primary' onClick={handleReadingStartClick}>
                                    읽기 시작
                                </Button>
                            ) : (
                                <Button size='small' scheme='primary' onClick={handleFinishedClick}>
                                    읽기 완료
                                </Button>
                            )
                        )}
                        {likeStatus ? (
                            <FaHeart onClick={handleFavoriteClick} />
                        ) : (
                            <FaRegHeart onClick={handleFavoriteClick} />
                        )}
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
    width: 450px;
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
        margin: 0;

        svg {
            font-size: 1.3rem;
            fill: red;
        }

        .rating {
            margin-top: 0.4rem;
            .filled-star {
                fill: yellow;
                stroke: black;
                stroke-width: 5px;
            }

            .empty-star {
                fill: #d6d6d6c3;
            }
        }
    }
`

export default BookItem;
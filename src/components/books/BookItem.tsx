import styled from "styled-components";
import { Book } from "../../models/model";
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Button from "../common/Button";

interface Props {
    book: Book;
    isFavoriteTab?: boolean;
};

const BookItem = ({ book }: Props) => {
    const isFavoriteTab = true;

    return (
        <Link to={`/books/${book.isbn}`}>
            <BookItemStyle>
                <div className="img">
                    <img src={`https://picsum.photos/id/${book.image}/200/200`} alt={book.title} />
                </div>
                <div className="content">
                    <div>
                        <h2 className="title">{book.title}</h2>
                        <h3 className="author">{book.author}</h3>
                    </div>
                    <div className="buttons">
                        {isFavoriteTab ? (
                            <Button size='small' scheme='primary'>
                                읽기 시작
                            </Button>
                        ) : (
                            book.readStatus === false ? (
                                <Button size='small' scheme='primary'>
                                    읽기 완료
                                </Button>
                            ) : (
                                <div>평점</div>
                            )
                        )}
                        {book.likeStatus && (
                            <FaHeart />
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
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 25px;

    .img {
        img {
            width: 9rem;
            height: 11.5rem;
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
        justify-content: space-between;
        gap: 25px;
        align-items: center;
        margin-top: 10px;

        svg {
            font-size: 1.3rem;
            fill: red;
        }
    }
`

export default BookItem;
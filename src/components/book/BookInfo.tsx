import styled from "styled-components";
import { BookDetail } from "../../models/model";
import Button from "../common/Button";
import { useBook } from "../../hooks/useBook";

interface Props {
    bookDetail?: BookDetail;
    id: string;
};

const BookInfo = ({ bookDetail, id }: Props) => {
    const { removeBook } = useBook(id);

    return (
        <BookInfoStyle>
            <div className="info">
                <img src={bookDetail?.bookImage} alt={bookDetail?.bookTitle} />
                <div className="detail">
                    <div>
                        <h2 className="title">{bookDetail?.bookTitle}</h2>
                        <h3 className="author">{bookDetail?.bookAuthor}</h3>
                    </div>
                    <div className="date-delete">
                        <div className="date">
                            <div>
                                <h4>시작 날짜</h4>
                                <p>{bookDetail?.bookStartDate}</p>
                            </div>
                            <div>
                                <h4>완독 날짜</h4>
                                <p>2024-07-20</p>
                            </div>
                        </div>
                        <Button className="deleteButton" size="small" scheme="normal" onClick={() => removeBook(id)}>
                            내 서재에서 삭제하기
                        </Button>
                    </div>
                </div>
            </div>
        </BookInfoStyle>
    );
};

const BookInfoStyle = styled.div`
    display: flex;
    padding-bottom: 2rem;
    border-bottom: 2px solid #d4d4d4b3;
    width: 100%;

    .info {
        display: flex;
        flex-direction: row;
        gap: 3rem;

        img {
            width: 13rem;
            height: 17rem;
        }
    }

    .detail {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        min-width: 500px;

        .date-delete {
            display: flex;
            justify-content: space-between;
            align-items: end;
        }
        
        .date {
            display: flex;
            flex-direction: row;
            gap: 3rem;

            h4 {
                margin-bottom: 0;
            }
        }

        .deleteButton {
            margin-bottom: 1rem;
        }
    }
`

export default BookInfo;
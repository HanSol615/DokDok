import styled from "styled-components";
import { BookDetail } from "../../models/model";

interface Props {
    bookDetail?: BookDetail;
};

const BookInfo = ({ bookDetail }: Props) => {
    return (
        <BookInfoStyle>
            <div className="info">
                <img src={bookDetail?.bookImage} alt={bookDetail?.bookTitle} />
                <div className="detail">
                    <div>
                        <h2 className="title">{bookDetail?.bookTitle}</h2>
                        <h3 className="author">{bookDetail?.bookAuthor}</h3>
                    </div>
                    <div className="date">
                        <p>{bookDetail?.bookStartDate}</p>
                        <p>2024-07-20</p>
                    </div>
                </div>
            </div>
        </BookInfoStyle>
    );
};

const BookInfoStyle = styled.div`
    display: flex;
    max-width: 900px;
    padding-bottom: 2rem;
    border-bottom: 2px solid #d4d4d4b3;

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
        
        .date {
            display: flex;
            flex-direction: row;
            gap: 2rem;
        }
    }
`

export default BookInfo;
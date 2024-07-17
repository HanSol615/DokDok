import styled from "styled-components";
import { BookDetail, BookReview } from "../../models/model";
import Button from "../common/Button";
import { useState } from "react";
import { useBook } from "../../hooks/useBook";

interface Props {
    bookDetail: BookDetail;
    id: string;
};

const Review = ({ bookDetail, id }: Props) => {
    const [selectedScore, setSelectedScore] = useState<number | null>(null);
    const [reviewText, setReviewText] = useState<string>('');
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const { addReview } = useBook(id);

    const handleStarClick = (index: number) => {
        if (!bookDetail.bookReview || isEditing) {
            setSelectedScore(index + 1);
        }
    };

    const renderStars = (maxStars: number, score: number | null = null) => {
        const stars = [];
        for (let i = 0; i < maxStars; i++) {
            stars.push(
                <Star
                    key={i}
                    className={score !== null && i < score ? 'filled-star' : 'empty-star'}
                    onClick={() => handleStarClick(i)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                </Star>
            );
        }
        return stars;
    };

    const handleReviewSubmit = async () => {
        if (!selectedScore || !reviewText) {
            alert('별점과 서평 내용을 모두 입력해주세요.');
            return;
        }

        const body: BookReview = {
            isbn: id,
            context: reviewText,
            score: selectedScore,
        };

        try {
            const response = await addReview(body);
            setReviewText(response.bookReview);
            setSelectedScore(response.bookScore);
            setIsEditing(false);
        } catch (error) {
            console.error('서평 작성 실패:', error);
            alert('서평 작성 중 오류가 발생했습니다.');
        }
    };

    return (
        <ReviewStyle>
            <h2>서평</h2>
            {bookDetail.bookReview && !isEditing ? (
                <p>{bookDetail.bookReview}</p>
            ) : (
                <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
            )}
            <div className="score-submit">
                <p className="rating">
                    {renderStars(5, isEditing ? selectedScore : (bookDetail?.bookScore || null))}
                </p>
                {!bookDetail.bookReview && (
                    <Button size="medium" scheme="primary" onClick={handleReviewSubmit}>
                        작성하기
                    </Button>
                )}
                {bookDetail.bookReview && !isEditing && (
                    <Button size="medium" scheme="primary" onClick={() => setIsEditing(true)}>
                        수정하기
                    </Button>
                )}
                {isEditing && (
                    <Button size="medium" scheme="primary" onClick={handleReviewSubmit}>
                        수정 완료
                    </Button>
                )}
            </div>
        </ReviewStyle>
    );
};

const ReviewStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid #d4d4d4b3;
    width: 100%;

    h2 {
        margin: 0;
    }

    textarea {
        min-height: 10rem;
        resize: none;
        padding: 1.5rem;
    }

    textarea::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    textarea:focus::-webkit-scrollbar {
        width: 8px;
        height: 8px;
        background-color: transparent;
    }

    textarea:focus::-webkit-scrollbar-thumb {
        background-color: #ccc;
        border-radius: 4px;
    }

    .score-submit {
        display: flex;
        justify-content: space-between;

        .rating {
            display: flex;
            font-size: 2rem;
            margin-top: 0.4rem;
            svg {
                width: 2rem;
                height: 2rem;
                cursor: pointer;
                transition: fill 0.2s;

                &:hover {
                    fill: yellow;
                }
            }

            .filled-star {
                fill: yellow;
                stroke: #aaaaaa96;
                stroke-width: 1px;
            }

            .empty-star {
                fill: #d6d6d6c3;
            }
        }
    }
`

const Star = styled.div`
    cursor: pointer;
`;

export default Review;
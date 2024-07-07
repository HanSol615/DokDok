export interface Book {
    title: string;
    author: string;
    image: string;
    likeStatus: boolean;
    readStatus: boolean;
    isbn: string;
};

export interface BookDetail {
    bookTitle: string;
    bookAuthor: string;
    bookImage: string;
    bookStartDate: string;
    bookEndDate: string;
    bookRemind: string[];
    bookReview: string;
    bookScore: number;
};
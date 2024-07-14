export interface Book {
    title: string;
    author: string;
    image: string;
    isbn: string;
    publisher?: string;
    likeStatus?: boolean;
    readStatus?: boolean;
    score?: number;
};

export interface BooksResponse {
    count: number;
    books: Book[];
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

export interface BookRemind {
    isbn?: string;
    context: string;
};

export interface BookRemindResponse {
    bookRemind: string[];
};

export interface DeleteBookRemind {
    isbn: string;
    index: number;
};

export interface BookReview {
    isbn?: string;
    context: string;
    score: number;
};

export interface BookReviewResponse {
    bookReview: string;
    bookScore: number;
};

export interface BookFinished {
    title: string;
    author: string;
    endDate: string;
    image: string;
    isbn: string;
};

export interface BookFinishedResult {
    bookFinished: BookFinished[];
    bookReadCount: number;
    bookFinishCount: number;
};

export interface ChangeBookDate {
    isbn: string;
    sDate: string;
    eDate: string;
};

export interface ChangeBookDateResponse {
    bookStatus: boolean;
    bookStartDate: string;
    bookEndDate: string;
};
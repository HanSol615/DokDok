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
    isbn: string;
    context: string;
};

export interface BookReview {
    isbn: string;
    context: string;
    score: number;
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
import styled from "styled-components";
import Booklist from "../components/books/Booklist";
import { Tab, Tabs } from "../components/common/Tabs";
import { useBooks } from "../hooks/useBooks";

const MyBooks = () => {
    const { favoriteBooks, favoriteBooksCount, readingBooks, readingBooksCount, finishedBooks, finishedBooksCount } = useBooks();

    console.log('즐겨찾기 책', favoriteBooks)
    return (
        <MyBooksStyle>
            <Tabs>
                <Tab title="✨ 즐겨찾기">
                    <Booklist books={favoriteBooks} count={favoriteBooksCount} isFavoriteTab={true}/>
                </Tab>
                <Tab title="📖 읽는 중">
                    <Booklist books={readingBooks} count={readingBooksCount}/>
                </Tab>
                <Tab title="📚 읽은 책">
                    <Booklist books={finishedBooks} count={finishedBooksCount}/>
                </Tab>
            </Tabs>
        </MyBooksStyle>
    );
};

const MyBooksStyle = styled.div`
    display: flex;
    flex-direction: column;
`

export default MyBooks;
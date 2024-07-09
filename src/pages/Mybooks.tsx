import styled from "styled-components";
import Booklist from "../components/books/Booklist";
import { Tab, Tabs } from "../components/common/Tabs";

const MyBooks = () => {
    return (
        <MyBooksStyle>
            <Tabs>
                <Tab title="✨ 즐겨찾기">
                    <Booklist />
                </Tab>
                <Tab title="📖 읽는 중">
                    <Booklist />
                </Tab>
                <Tab title="📚 읽은 책">
                    <Booklist />
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
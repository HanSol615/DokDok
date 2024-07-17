import { useLocation } from 'react-router-dom';
import { useOutletContext } from "react-router-dom";
import { Book } from "../models/model";
import Booklist from "../components/books/Booklist";

interface SearchResultsContext {
    searchResults: {
        books: Book[];
    };
    loading: boolean;
    error: string | null;
}


const SearchResults = () => {
    const { searchResults, loading, error } = useOutletContext<SearchResultsContext>();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');
    
    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!Array.isArray(searchResults.books)) {
        console.error("searchResults.books is not an array:", searchResults.books);
        return null;
    }

    return (
        <div>
            <h1>"{query}" 검색 결과</h1>
            <Booklist books={searchResults.books} isFavoriteTab={true} messageType="검색결과" />
        </div>
    );
};

export default SearchResults;
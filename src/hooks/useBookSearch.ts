import { useEffect, useState } from "react";
import { Book } from "../models/model";
import { searchBooks } from "../api/books.api";

export const useBookSearch = (query: string) => {
    const [searchResults, setSearchResults] = useState<Book[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBooks = async () => {
            setLoading(true);
            setError(null);
            try {
                const results = await searchBooks({ title: query });
                setSearchResults(results);
            } catch (error) {
                setError("Failed to fetch books");
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchBooks();
        }
    }, [query]);

    return { searchResults, loading, error };
};
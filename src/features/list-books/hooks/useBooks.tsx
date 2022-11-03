import { useCallback, useEffect, useState } from "react";
import { listBooks } from "../../../services/book/listBooks";
import { ListBookVO } from "../types/listBooksVO";

// TODO tanstack-query
export const useBooks = () => {
  const [books, setBooks] = useState<ListBookVO[]>([]);
  const fetchBooks = useCallback(() => {
    listBooks().then((res) => {
      setBooks(res);
    });
  }, []);

  useEffect(() => {
    fetchBooks();
  }, []);
  return { books, fetchBooks };
};

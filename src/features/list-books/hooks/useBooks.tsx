import { useCallback, useEffect, useState } from "react";
import { listBooks } from "../../../entities/service/listBooks";
import { ListBookView } from "../types";

// TODO tanstack-query
export const useBooks = () => {
  const [books, setBooks] = useState<ListBookView[]>([]);
  const fetchBooks = useCallback(() => {
    listBooks().then((res) => {
      const bookViewList = res.map((b) => ({
        ...b,
        pages: b.pages.toString(),
      }));
      setBooks(bookViewList);
    });
  }, []);

  useEffect(() => {
    fetchBooks();
  }, []);
  return { books, fetchBooks };
};

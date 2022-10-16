import React, { useCallback, useEffect } from "react";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

export type Book = { title: string; description: string; pages: number };

export const useBooks = () => {
  const stateBooks = atom<Book[] | null>({
    key: "state-books",
    default: null,
  });

  const [books, setBooks] = useRecoilState(stateBooks);
  const fetchBooks = useCallback(() => {
    setBooks([
      { title: "シャーロックホームズの冒険", description: "名作", pages: 100 },
    ]);
  }, []);

  useEffect(() => {
    fetchBooks();
  }, []);

  return { books, fetchBooks };
};

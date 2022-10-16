import React from "react";
import { useBooks } from "../hooks/useBooks";

export const BookList = () => {
  const { books, fetchBooks } = useBooks();
  return (
    <div>
      <div>BookList</div>
      <div>
        {books?.map((book) => (
          <div key={book.title}>
            <div>{book.title}</div>
            <div>{book.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

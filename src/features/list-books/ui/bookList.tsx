import { Typography } from "@mui/material";
import React from "react";
import { useBooks } from "../hooks/useBooks";
import { BookCard } from "./bookCard";

export const BookList = () => {
  const { books } = useBooks();
  return (
    <div>
      <Typography variant="h4">BookList</Typography>
      <main>
        <ul style={{ listStyle: "none", paddingInlineStart: 0 }}>
          {books?.map((book) => (
            <li key={book.title}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

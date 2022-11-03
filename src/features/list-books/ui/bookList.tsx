import { List, ListItem, Typography } from "@mui/material";
import React from "react";
import { useBooks } from "../hooks/useBooks";
import { BookCard } from "./bookCard";

export const BookList = () => {
  const { books } = useBooks();
  return (
    <div>
      <Typography variant="h4">BookList</Typography>
      <main>
        <List>
          {books?.map((book) => (
            <ListItem key={book.title}>
              <BookCard book={book} />
            </ListItem>
          ))}
        </List>
      </main>
    </div>
  );
};

import { List, ListItem, Typography } from "@mui/material";
import React from "react";
import { useListBooks } from "../hooks/useBooks";
import { BookCard } from "./bookCard";

export const BookList = () => {
  const { books, isLoading, isError, refetch, isRefetching } = useListBooks();
  return (
    <div>
      <Typography variant="h4">BookList</Typography>
      <main>
        {/* TODO 部品化 */}
        <button onClick={() => refetch()}>Refetch</button>
        {isError && <div>Oops. Something happens...</div>}
        {isLoading || isRefetching ? (
          <div>Loading...</div>
        ) : (
          <List>
            {books?.map((book) => (
              <ListItem key={book.title}>
                <BookCard book={book} />
              </ListItem>
            ))}
          </List>
        )}
      </main>
    </div>
  );
};

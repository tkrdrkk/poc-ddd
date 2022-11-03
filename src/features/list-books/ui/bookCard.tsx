import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { ListBookVO } from "../types/listBooksVO";

export const BookCard = ({ book }: { book: ListBookVO }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {book.title}
        </Typography>
        <Typography variant="body1">{book.description}</Typography>
        <Typography variant="caption">{book.pages}</Typography>
      </CardContent>
    </Card>
  );
};

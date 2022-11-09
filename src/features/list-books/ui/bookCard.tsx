import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { ListBookView } from "../types";

export const BookCard = ({ book }: { book: ListBookView }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {book.title}
        </Typography>
        <Typography variant="subtitle1">by {book.author}</Typography>
        <Typography variant="body1">summary: {book.description}</Typography>
        <Typography variant="caption">pg.{book.pages}</Typography>
      </CardContent>
    </Card>
  );
};

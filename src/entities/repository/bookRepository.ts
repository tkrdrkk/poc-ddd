import axios from "axios";
import { Book, BookRepository } from "../types";

const bookApiEndpoint = axios.create({
  baseURL: "http://localhost:3004/books",
});

export const bookRepository: BookRepository = {
  listBooks: async () => {
    const res = await bookApiEndpoint.get<Book[]>("");
    return res.data;
  },
};

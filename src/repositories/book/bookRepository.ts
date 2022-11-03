import axios from "axios";
import { BookDO } from "../../entities";
import { BookRepository } from "./bookRepositoryType";

const bookApiEndpoint = axios.create({
  baseURL: "http://localhost:3004/books",
});

export const bookRepository: BookRepository = {
  listBooks: async () => {
    const res = await bookApiEndpoint.get<BookDO[]>("");
    console.log(res.data);
    return res.data;
  },
};

import axios from "axios";
import {
  Book,
  BookMutationRepository,
  BookQueryRepository,
  CreateBookParams,
} from "../types";

const bookApiEndpoint = axios.create({
  baseURL: "http://localhost:3004/books",
});

export const bookQueryRepository: BookQueryRepository = {
  listBooks: async () => {
    const res = await bookApiEndpoint.get<Book[]>("");
    return res.data;
  },
};

export const bookMutationRepository: BookMutationRepository = {
  createBook: async (params: CreateBookParams) => {
    console.log(params);
  },
};

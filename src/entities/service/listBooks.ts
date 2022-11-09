import { bookQueryRepository } from "../repository";
import { BookData } from "../types";

export const listBooks = async (): Promise<BookData[]> => {
  const bookDataList = await bookQueryRepository.listBooks();
  return bookDataList;
};

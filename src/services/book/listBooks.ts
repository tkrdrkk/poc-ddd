import { ListBookVO } from "../../features/list-books/types/listBooksVO";
import { bookRepository } from "../../repositories/book";

export const listBooks = async (): Promise<ListBookVO[]> => {
  const res = await bookRepository.listBooks();
  console.log(res);
  const viewObjects = res.map((d) => ({ ...d, pages: d.pages.toString() }));
  return viewObjects;
};

import { BookDO } from "../../entities";

export type BookRepository = {
  listBooks: () => Promise<BookDO[]>;
};

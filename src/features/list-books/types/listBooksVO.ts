import { BookDTO } from "../../../repositories/book/bookDTOType";

export type ListBookVO = Omit<BookDTO, "pages"> & { pages: string };

import { BookData } from "entities/book/types";

export type ListBookView = Omit<BookData, "pages"> & { pages: string };

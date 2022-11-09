import { BookData } from "../../../entities/types";

export type ListBookView = Omit<BookData, "pages"> & { pages: string };

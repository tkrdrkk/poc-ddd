/**
 * ドメインオブジェクト
 */
export type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  pages: number;
};

/**
 * DTO
 */
export type BookData = Readonly<Book>;

/**
 * リポジトリ
 * TODO CQRS風味にしてみる？
 */
export type BookQueryRepository = {
  listBooks: () => Promise<BookData[]>;
};

export type CreateBookParams = Omit<Book, "id">;
export type BookMutationRepository = {
  createBook: (params: CreateBookParams) => Promise<void>;
};

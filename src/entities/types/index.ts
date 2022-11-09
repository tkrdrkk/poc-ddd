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
export type BookData = Book;

/**
 * リポジトリ
 * TODO CQRS風味にしてみる
 */
export type BookRepository = {
  listBooks: () => Promise<BookData[]>;
};

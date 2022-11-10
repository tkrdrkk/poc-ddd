import { useQuery } from "@tanstack/react-query";
import { listBooks } from "entities/book/service/listBooks";

export const useListBooks = () => {
  const { data, isError, isRefetching, isLoading, refetch } = useQuery({
    queryKey: ["book-list"],
    queryFn: listBooks,
  });

  // VOへの変換
  const books = data?.map((b) => ({
    ...b,
    pages: b.pages.toString(),
  }));

  return {
    books,
    isError,
    isLoading,
    isRefetching,
    refetch,
  };
};

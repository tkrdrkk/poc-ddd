import { bookRepository } from "./bookRepository";

// FIXME test時axiosが読めないとかいうエラー Jestの設定いじるなどしたが改善せず
describe("listBooks", () => {
  test("list books", async () => {
    const res = await bookRepository.listBooks();
    expect(res).toBeDefined();
  });
});

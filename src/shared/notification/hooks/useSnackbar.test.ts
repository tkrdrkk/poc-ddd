import { act, renderHook } from "@testing-library/react-hooks";
import { RecoilRoot } from "recoil";
import { useSnackbar } from "./useSnackbar";

describe("snackbar hooks", () => {
  test("add snackbar", () => {
    const { result } = renderHook(() => useSnackbar(), { wrapper: RecoilRoot });
    expect(result.current.snackbars).toEqual([]);

    act(() => {
      result.current.addSnackbar({ message: "this is test snackbar." });
    });
    expect(result.current.snackbars).toEqual([
      { message: "this is test snackbar." },
    ]);
  });
});

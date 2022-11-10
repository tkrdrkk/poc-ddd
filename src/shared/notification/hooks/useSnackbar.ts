import { atom, useRecoilState } from "recoil";

/**
 * @package
 */
export type UseSnackbarReturnType = {
  snackbars: SnackbarAtom[];
  addSnackbar: (params: { message: string }) => void;
};

type SnackbarAtom = {
  message: string;
};

const snackbarsAtom = atom<SnackbarAtom[]>({
  key: "snackbars-atom",
  default: [],
});

export const useSnackbar = (): UseSnackbarReturnType => {
  const [snackbars, setSnackbars] = useRecoilState(snackbarsAtom);
  const addSnackbar = (params: { message: string }) =>
    setSnackbars((prev) => [...prev, { ...params }]);

  return { snackbars, addSnackbar };
};

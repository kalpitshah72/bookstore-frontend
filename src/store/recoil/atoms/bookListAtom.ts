import { atom } from "recoil";

export const bookListAtom = atom<Book[]>({
  key: "bookListState",
  default: [],
});

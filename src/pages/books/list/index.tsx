import { FC, useEffect } from "react";
import listBook from "../../../services/apis/book/list-book";
import BookList from "./components/book-list";
import { useRecoilState } from "recoil";
import { bookListAtom } from "../../../store/recoil/atoms/bookListAtom";

const BooksPage: FC = () => {
  const [, setBookList] = useRecoilState(bookListAtom);

  const init = async () => {
    try {
      const res = await listBook();
      console.log(res);
      setBookList(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <p className="text-3xl	font-bold py-2">Books</p>
      <div>
        <BookList />
      </div>
    </>
  );
};

export default BooksPage;

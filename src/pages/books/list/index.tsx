import { FC, useEffect } from "react";
import listBook from "../../../services/apis/book/list-book";
import BookList from "./components/book-list";
import { useRecoilState } from "recoil";
import { bookListAtom } from "../../../store/recoil/atoms/bookListAtom";
import InfiniteScroll from "react-infinite-scroll-component";

const BooksPage: FC = () => {
  const [bookList, setBookList] = useRecoilState(bookListAtom);

  const init = async () => {
    try {
      const res = await listBook();
      setBookList(res);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchMoreData = async () => {
    const res = await listBook();
    setBookList(bookList.concat(res));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <p className="text-3xl font-bold py-2">Books</p>
      <div>
        <InfiniteScroll
          dataLength={bookList.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4 className="px-1">Loading...</h4>}
        >
          <BookList />
        </InfiniteScroll>
      </div>
    </>
  );
};

export default BooksPage;

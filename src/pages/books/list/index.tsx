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
      console.log(res);
      setBookList(res);
    } catch (error) {
      console.log(error);
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
      <div className="px-2">
        <p className="text-3xl	font-bold py-2">Books</p>
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
      </div>
    </>
  );
};

export default BooksPage;

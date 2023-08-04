import { useRecoilValue } from "recoil";
import Book from "../../../../components/book";
import { bookListAtom } from "../../../../store/recoil/atoms/bookListAtom";
import { FC } from "react";

const BookList: FC = () => {
  const bookList = useRecoilValue(bookListAtom);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-7">
      {bookList.map((book, index) => {
        return (
          <Book
            key={index}
            id={book.id}
            name={book.name}
            image={book.image}
            price={book.price}
            discount={book.discount}
            currency={book.currency}
          />
        );
      })}
    </div>
  );
};

export default BookList;

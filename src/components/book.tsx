import { FC } from "react";
import bookImage from "../assets/images/book.png";

const Book: FC<Book> = () => {
  return (
    <div className="book">
      <img src={bookImage} />
      <p className="book-name">레이블라우스</p>
      <div className="flex">
        <div>
          <p>10%</p>
        </div>
        <div>
          <p>57,600</p>
        </div>
      </div>
    </div>
  );
};

export default Book;

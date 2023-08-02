import { FC } from "react";
import Book from "../../../components/book";

const Books: FC = () => {
  return (
    <>
      <h1>Books</h1>
      <div>
        <Book
          id={3}
          name="novel"
          image="https://example.com/path"
          price={100}
          discount={10}
        />
      </div>
    </>
  );
};

export default Books;

import bookImage from "../../../assets/images/book.png";

const listBook = async (): Promise<Book[]> => {
  const books: Book[] = [];
  for (let i = 1; i <= 100; i++) {
    books.push({
      id: i,
      name: "레이블라우스",
      image: bookImage,
      price: 57600,
      discount: 10,
      currency: "원",
    });
  }
  return books;
};

export default listBook;

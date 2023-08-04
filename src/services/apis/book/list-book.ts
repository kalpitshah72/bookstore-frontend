import bookImage from "../../../assets/images/book.png";

const delay = (delayInms: number) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

const listBook = async (): Promise<Book[]> => {
  const books: Book[] = [];
  for (let i = 1; i <= 10; i++) {
    books.push({
      id: i,
      name: "레이블라우스",
      image: bookImage,
      price: 57600,
      discount: 10,
      currency: "원",
    });
  }
  await delay(2000);
  return books;
};

export default listBook;

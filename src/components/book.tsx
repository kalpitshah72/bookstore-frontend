import { FC } from "react";

const Book: FC<Book> = ({ id, name, discount, image, price, currency }) => {
  return (
    <div className="w-full" key={id}>
      <div className="w-full mb-1.5">
        <img src={image} className="w-full" />
      </div>
      <div className="mx-2">
        <p className="text-start mb-1">{name}</p>
        <div className="flex justify-between">
          <div>
            <p className="text-red-600 font-bold mb-2">{discount}%</p>
          </div>
          <div>
            <p className="font-bold">
              {price}
              &nbsp;
              {currency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

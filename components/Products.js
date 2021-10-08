import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Max_rating = 5;
const Min_rating = 1;

function Products({ title, description, id, price, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (Max_rating - Min_rating + 1)) + Min_rating
  );

  const dispatch = useDispatch();

  const addItems = () => {
    dispatch(
      addToBasket({
        title: title,
        description: description,
        id: id,
        price: price,
        category: category,
        image: image,
        rating: rating,
      })
    );
  };

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="md:relative bg-white m-5 z-30 md:flex md:flex-col md:shadow-md md:rounded-md md:mt-5 md:p-10 md:mx-5 rounded-md shadow-lg p-3 relative flex flex-col xs:mx-24 hover:shadow-2xl ">
      <p className="text-gray-600 italic absolute top-2 right-2">{category}</p>
      <Image height={200} width={200} objectFit="contain" src={image} />
      <h1 className="font-bold">{title}</h1>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="line-clamp-2 text-sm my-2">{description}</p>

      <div className="font-semibold mb-5">
        <Currency quantity={price} currency="GBP" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https:links.papareact.com/fdw" />
          <p className="text-xs text-gray-500">Free NEXT-day delivery</p>
        </div>
      )}

      <button onClick={addItems} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Products;

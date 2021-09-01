import { StarIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { removeFromBasket, addToBasket } from "../pages/slices/basketSlice";

function CheckoutProducts({ title, description, image, id, price, rating }) {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(removeFromBasket({ id }));
  };

  const AddItem = () => {
    dispatch(
      addToBasket({
        title: title,
        description: description,
        id: id,
        price: price,
        image: image,
        rating: rating,
      })
    );
  };

  return (
    <div className="flex items-center rounded-md shadow-md my-4 p-4 bg-white relative hover:shadow-lg transition-all">
      <div className="flex items-center">
        <img className="w-28 object-contain" src={image} />
        <div className="p-5 mr-28">
          <h1 className="font-bold">{title}</h1>
          <div className="flex">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <StarIcon className="h-5 text-yellow-500" />
              ))}
          </div>
          <p className="line-clamp-2 mt-2">{description}</p>
          <p className="font-semibold mt-2">${price}</p>
        </div>
      </div>

      <div className="p-2 flex flex-col">
        <button
          onClick={AddItem}
          className="button absolute right-2 top-14 p-2 text-xs rounded-md"
        >
          Add Item
        </button>
        <button
          onClick={removeItem}
          className="button absolute right-2 p-2 text-xs rounded-md"
        >
          Remove from Basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProducts;

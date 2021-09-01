import Header from "../components/Header";
import Image from "next/image";
import CheckoutProducts from "../components/CheckoutProducts";
import { useSelector } from "react-redux";
import { getBasketTotal, selectItems } from "./slices/basketSlice";
import { useSession } from "next-auth/client";
import CurrencyFormat from "react-currency-format";

export default function checkout() {
  const basket = useSelector(selectItems);
  const [session] = useSession();

  return (
    <div className="bg-gray-100">
      <header className="min-w-max">
        <Header />
      </header>
      <main className="lg:flex max-w-screen-xl mx-auto ">
        <div>
          <Image
            src="https://links.papareact.com/ikj"
            height={250}
            width={1050}
          />
          <h1 className="font-bold text-2xl mt-4 italic">
            {basket.length === 0
              ? "Your Shopping basket is empty"
              : "Shopping basket"}
          </h1>
          <hr />
          <div>
            {basket.map((items) => (
              <CheckoutProducts
                title={items.title}
                description={items.description}
                key={items.id}
                id={items.id}
                price={items.price}
                category={items.category}
                image={items.image}
                rating={items.rating}
              />
            ))}
          </div>
        </div>
        <div className="bg-white p-4 mx-auto flex flex-col space-y-3">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <h1 className=" font-semibold italic">
                  Subtotal
                  <span className=" font-normal">
                    ({basket.length} items): <strong>{value}</strong>
                  </span>
                </h1>
                <small className="subtotal_gift">
                  <input type="checkbox" />
                  This order contains a gift
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />

          <button
            className={
              !session
                ? "bg-gray-400 p-2 shadow-md rounded-md font-semibold hover:shadow-lg"
                : "button p-2 shadow-md rounded-md font-semibold hover:shadow-lg"
            }
          >
            {!session ? `Sign In to CheckOut` : "CheckOut"}
          </button>
        </div>
      </main>
    </div>
  );
}

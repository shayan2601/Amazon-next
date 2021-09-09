import Header from "../components/Header";
import Image from "next/image";
import CheckoutProducts from "../components/CheckoutProducts";
import { useSelector } from "react-redux";
import { getBasketTotal, selectItems } from "./slices/basketSlice";
import { useSession } from "next-auth/client";
import CurrencyFormat from "react-currency-format";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const items = useSelector(selectItems);
  const [session] = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    //Call thr backend to create the checkout session
    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });

    //redirect the user to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

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
            {items.length === 0
              ? "Your Shopping basket is empty"
              : "Shopping basket"}
          </h1>
          <hr />
          <div>
            {items.map((item) => (
              <CheckoutProducts
                title={item.title}
                description={item.description}
                key={item.id}
                id={item.id}
                price={item.price}
                category={item.category}
                image={item.image}
                rating={item.rating}
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
                    ({items.length} items): <strong>{value}</strong>
                  </span>
                </h1>
                <small className="subtotal_gift">
                  <input type="checkbox" />
                  This order contains a gift
                </small>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(items)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />

          <button
            role="link"
            onClick={createCheckoutSession}
            className={
              !session
                ? "bg-gray-400 p-2 shadow-md rounded-md font-semibold hover:shadow-lg"
                : "button p-2 shadow-md rounded-md font-semibold hover:shadow-lg"
            }
          >
            {!session ? `Sign In to CheckOut` : "Proceed to CheckOut"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Checkout;

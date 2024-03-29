import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Header from "../components/Header";

function success() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <header className=" min-w-max">
        <Header />
      </header>

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-2xl">
              Thank You, Your order has been confirmed
            </h1>
          </div>
          <p>
            Thank you for shopping with us. We'll send a confirmation message
            that your items has shipped, if you would like to check the status
            of order(s) please press the link below.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to my order(s)
          </button>
        </div>
      </main>
    </div>
  );
}

export default success;

import Image from "next/image";
import {
  ChevronDownIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/client";
import { useSelector } from "react-redux";
import { selectItems } from "../pages/slices/basketSlice";
import { useRouter } from "next/router";

function Header() {
  const [session] = useSession();

  const router = useRouter();

  const basket = useSelector(selectItems);

  const checkoutPage = () => {
    router.push("/checkout");
  };

  return (
    <header className="flex flex-col">
      <div className="flex items-center justify-between px-2 py-1 text-white bg-amazon_blue">
        <div className="mt-3">
          <Image
            onClick={() => router.push("/")}
            objectFit="contain"
            width={150}
            height={40}
            src="https://links.papareact.com/f90"
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-cente flex-grow px-5">
          <div className="flex items-center bg-gray-100 text-black rounded-l-md">
            <p className="text-xl px-2">All</p>
            <ChevronDownIcon className="cursor-pointer h-10 py-2" />
          </div>
          <div className="flex items-center bg-white px-1 rounded-r-md flex-grow">
            <input
              className="p-2 outline-none text-black flex-grow flex-shrink"
              placeholder="Search"
            />
            <SearchIcon className="h-10 -mr-2 p-2  bg-yellow-500 cursor-pointer rounded-r-md text-black" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="cursor-pointer link">
            <p onClick={!session ? signIn : signOut} className="text-lg">
              {session ? `Hello! ${session.user.name}` : "Sign IN"}
            </p>
            <div className="flex items-center -mt-2">
              <p className="text-sm">Accounts & Lists</p>
              <ChevronDownIcon className="cursor-pointer h-10 p-2 -ml-2" />
            </div>
          </div>
          <div>
            <p className="text-lg">Return</p>
            <p>& Order</p>
          </div>
          <div
            onClick={checkoutPage}
            className="flex items-center cursor-pointer"
          >
            <span className="relative">
              <ShoppingCartIcon className="h-10 p-2" />
              <sup className="absolute top-3 left-8">{basket.length}</sup>
            </span>
            <p>Cart</p>
          </div>
        </div>
      </div>
      {/* header Bottom */}
      <div className="flex items-center bg-amazon_blue-light px-3 text-white justify-between cursor-pointer ">
        <div className="md:flex items-center  font-semibold space-x-2 hidden">
          <div className="flex items-center font-semibold">
            <MenuIcon className="h-10 p-2" />
            <p>All</p>
          </div>
          <div className="flex space-x-2">
            <p>Today's Deal</p>
            <p>Costumer Service</p>
            <p>Gift Cards</p>
            <p>Registry</p>
            <p>Sell</p>
          </div>
        </div>
        <div>
          <p>Amazon's response to COVID-19</p>
        </div>
      </div>
    </header>
  );
}

export default Header;

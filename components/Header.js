import {
  MenuIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MenuOption from "./MenuOption";
import {
  DocumentDuplicateIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/solid";

function Header() {
  const router = useRouter();
  const [selected, setSelected] = useState("");
  const [show, handleShow] = useState(false);
  const [open, setOpen] = useState(false);
  const opened = Boolean(open);

  const basket = useSelector(selectItems);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handleShow(true);
  //     } else {
  //       handleShow(false);
  //     }
  //   });
  //   return () => window.removeEventListener("scroll");
  // }, []);

  const menuOpen = () => {
    setOpen(true);
    if (open) {
      setOpen(false);
    }
  };

  return (
    <header className="flex flex-col">
      <div
        className={`flex items-center justify-between px-2 py-1 text-white bg-amazon_blue ${
          show && "bg-amazon_blue-transparent"
        }  `}
      >
        <div
          aria-expanded={opened ? "true" : undefined}
          onClick={menuOpen}
          className="md:hidden cursor-pointer relative"
        >
          <MenuIcon className="h-12 p-2 text-yellow-100" />
        </div>
        <div
          onClick={() => {
            router.push("/");
          }}
        >
          <h2 className=" text-xl font-bold font-sans cursor-pointer">
            PHONES<span className="text-green-400">HUT</span>
          </h2>
        </div>

        <div className=" items-center space-x-3 hidden md:inline-flex">
          <MenuOption
            onClick={() => {
              router.push("/");
              setSelected("Home");
            }}
            selected
            active={selected === "Home"}
            title="Home"
          />
          <MenuOption
            onClick={() => {
              router.push("/about");
              setSelected("About");
            }}
            active={selected === "About"}
            title="About"
          />
          <MenuOption
            onClick={() => {
              router.push("/contact");
              setSelected("Contact");
            }}
            active={selected === "Contact"}
            title="Contact US"
          />
          <MenuOption
            onClick={() => {
              router.push("/checkout");
              setSelected("Cart");
            }}
            active={selected === "Cart"}
            title="Cart"
          />
        </div>
        <span
          onClick={() => router.push("/checkout")}
          className="relative cursor-pointer"
        >
          <ShoppingCartIcon className="h-12 p-2 hover:text-gray-300" />
          <sup className="absolute top-1 py-2 left-8 bg-red-600 text-white p-1 rounded-full">
            {basket.length}
          </sup>
        </span>
      </div>

      {/* menuOpen */}
      {open ? (
        <div className="bg-amazon_blue animation">
          <div className=" flex flex-col items-left space-y-3 text-white px-8 py-5 ">
            <div className="flex items-center hover:bg-gray-700 rounded-md ">
              <HomeIcon className="h-10 p-2 text-gray-400" />

              <p
                className=" cursor-pointer font-semibold uppercase hover:text-red-600 text-lg font-mono"
                onClick={() => router.push("/")}
              >
                Home
              </p>
            </div>

            <hr />

            <div className="items-center flex hover:bg-gray-700 rounded-md ">
              <DocumentDuplicateIcon className=" h-10 p-2 text-gray-400" />
              <p
                className="cursor-pointer font-semibold uppercase hover:text-red-600 text-lg font-mono"
                onClick={() => router.push("/about")}
              >
                About Us
              </p>
            </div>

            <hr />

            <div className="flex items-center hover:bg-gray-700 rounded-md ">
              <PhoneIcon className=" h-10 p-2 text-gray-400" />
              <p
                className="cursor-pointer font-semibold uppercase hover:text-red-600 text-lg font-mono "
                onClick={() => router.push("/contact")}
              >
                Contact Us
              </p>
            </div>
            <hr />
            <div className="flex items-center hover:bg-gray-700 rounded-md ">
              <ShoppingBagIcon className=" h-10 p-2 text-gray-400" />
              <p
                className="cursor-pointer font-semibold uppercase hover:text-red-600 text-lg font-mono "
                onClick={() => router.push("/checkout")}
              >
                Cart
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Header;

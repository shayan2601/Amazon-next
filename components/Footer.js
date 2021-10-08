import router from "next/router";

function Footer() {
  return (
    <div className=" bg-green-900 text-white sm:grid place-items-center ">
      <div className="md:flex md:items-start md:justify-between md:space-x-36 md:space-y-1 lg:space-x-72 md:ml-0 pt-14 p-8 pb-8 space-y-20 w-full">
        <div className="text-center space-y-2">
          <p>--------------------</p>
          <p
            onClick={() => router.push("/")}
            className="text-xl cursor-pointer hover:text-red-400 "
          >
            Home
          </p>
          <p
            onClick={() => router.push("/about")}
            className="text-xl cursor-pointer hover:text-red-400 "
          >
            About US
          </p>
          <p
            onClick={() => router.push("/contact")}
            className="text-xl cursor-pointer hover:text-red-400 "
          >
            Contact Us
          </p>
          <p
            onClick={() => router.push("/checkout")}
            className="text-xl cursor-pointer hover:text-red-400 "
          >
            Cart
          </p>
          <p>--------------------</p>
        </div>
        <div className="space-y-5">
          <h1
            style={{ letterSpacing: 3 }}
            className="text-2xl uppercase font-bold text-white text-center"
          >
            Contact Information
          </h1>
          <div className="text-lg space-y-2">
            <p
              style={{ fontFamily: "Gluten" }}
              className="text-xl font-semibold text-red-400 text-center "
            >
              Phones hut ltd
            </p>

            <p className="text-center">
              <spann className="italic text-yellow-200 font-semibold mr-2">
                Email:
              </spann>
              phoneshutblackburn@gmail.com
            </p>
            <p className="text-center">
              <span className="italic text-yellow-200 font-semibold mr-2">
                Address:
              </span>
              Unit 302a 7 Lord street The Mall Blackburn Bb1 7NQ
            </p>
            <p className="text-center">
              <span className="italic text-yellow-200 font-semibold mr-2">
                Telephone:
              </span>
              00447527900053
            </p>
          </div>
        </div>
        <div className="space-y-5">
          <h1
            style={{ letterSpacing: 5 }}
            className="text-2xl uppercase font-bold text-white text-center"
          >
            Categories
          </h1>
          <div className="text-center">
            <ul style={{ listStyle: "outside" }}>
              <li>Mobile Phones</li>
              <li>Cases</li>
              <li>Laptops</li>
              <li>Mobile Accessories</li>
              <li>Protectors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

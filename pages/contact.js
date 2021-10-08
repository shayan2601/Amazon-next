import Footer from "../components/Footer";
import Header from "../components/Header";

function contact() {
  return (
    <div style={{ height: "100vh" }} className="flex flex-col">
      <header className=" min-w-max fixed w-full top-0 z-50">
        <Header />
      </header>
      <main className="mt-14">
        <div className="grid place-items-center">
          <p
            style={{ fontFamily: "Lobster" }}
            className="text-center text-4xl font-bold text-black mt-10 bg-gray-200 w-max p-2 rounded-lg shadow-xl"
          >
            Location of Phones Hut
          </p>
        </div>

        <p className="mx-10 my-20 border-4 rounded-md shadow-2xl border-red-500">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294.91389043358714!2d-2.483022549997998!3d53.748342928277225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b9fef2bf8bc0d%3A0x3602d48e5693fcff!2sPhones%20Hut!5e0!3m2!1sen!2s!4v1633709395760!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </p>
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default contact;

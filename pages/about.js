import Footer from "../components/Footer";
import Header from "../components/Header";

function about() {
  return (
    <div style={{ height: "100vh" }} className=" flex flex-col ">
      <Header />
      <div>
        <h1>Hi</h1>
      </div>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default about;

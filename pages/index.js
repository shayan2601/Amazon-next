import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductsFeed from "../components/ProductsFeed";

export default function Home({ products }) {
  return (
    <div style={{ height: "100vh" }} className="flex flex-col">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" min-w-max fixed w-full top-0 z-50">
        <Header />
      </header>
      <main className="max-w-screen-xl mx-auto mt-0">
        <Banner />
        <ProductsFeed products={products} />
      </main>
      <footer className="mx-auto w-full">
        <Footer />
      </footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const url = "https://fakestoreapi.com/products";
  const fetchData = await fetch(url);
  const products = await fetchData.json();

  return {
    props: {
      products,
      session,
    },
  };
}

import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductsFeed from "../components/ProductsFeed";

export default function Home({ products }) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className=" min-w-max">
        <Header />
      </header>
      <main className="max-w-screen-xl mx-auto">
        <Banner />
        <ProductsFeed products={products} />
      </main>
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

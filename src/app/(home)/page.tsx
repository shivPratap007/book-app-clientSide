import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Banner />
      <Suspense fallback={"Loading...."}><ProductList /></Suspense>
    </>
  );
}

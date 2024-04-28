import Banner from "@/components/Banner";
import ProductList from "@/components/ProductList";

async function getData() {
  const res = await fetch('http://localhost:4321/api/bookss')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {
  const books = await getData()


  return (
    <>
      <Banner/>
      <ProductList books={books.allBooks} />
    </>
  );
}

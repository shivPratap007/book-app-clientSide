import { Book } from "@/types/BookType";
import BookCard from "./BookCard";

interface Data{
  allBooks:Book[];
}
async function getData():Promise<Data> {
  const res = await fetch("http://localhost:4321/api/bookss",{
    cache:"no-store"
  });
  new Promise((res)=>setTimeout(()=>{},5000));


  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function ProductList() {
  const books = await getData();
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {books.allBooks.map((book: Book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>
    </>
  );
}

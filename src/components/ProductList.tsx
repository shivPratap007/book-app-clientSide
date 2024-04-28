import { Book } from "@/types/BookType";
import BookCard from "./BookCard";
export default function ProductList({ books }: { books: Book[] }) {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center">
        {books.map((book:Book) => (
          <BookCard key={book._id} book={book}/>
        ))}
      </div>
    </>
  );
}

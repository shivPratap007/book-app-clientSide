import { Book } from "@/types/BookType";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div className="max-w-80 w-80 bg-white shadow-md rounded-md overflow-hidden  h-52 m-4 ">
      {" "}
      {/* Increased height of the whole card */}
      <div className="flex h-full">
        <div className="w-1/2 p-2">
          {" "}
          <Image
            className="w-full h-full object-cover"
            width={100}
            height={100}
            src={book.coverImage}
            alt={book.title}
          />
        </div>
        <div className="p-4 flex flex-col justify-between w-2/3">
          {" "}
          {/* Decreased width of right part */}
          <div>
            <h2 className="text-md font-bold text-balance ">{book.title}</h2>
            <p className="text-gray-600 font-semibold underline hover:text-indigo-700 transition cursor-pointer">{book.author?.name}</p>
          </div>
          <button className="bg-indigo-700 text-white font-semibold px-2 py-2 w-26 rounded-md m-2 hover:bg-white hover:text-indigo-700 border-2 border-indigo-700">
            {" "}
            {/* Decreased width and increased height of button */}
            <Link href={`/book/${book._id}`}>Read More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;

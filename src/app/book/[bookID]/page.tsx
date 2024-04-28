import Image from "next/image";
import Link from "next/link";


interface SingleBook{
    _id:string;
    title:string;
    author:{id:string,name:string};
    genre:string;
    coverImage:string;
    file:string;
    description:string;
    __v:number;
}
interface Data{
    result:SingleBook;
}


async function getSingleBook(bookId: string): Promise<Data> {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/api/bookss/${bookId}`
    );
    const book = await response.json();
    return book;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
}



export default async function BookPreview({
  params,
}: {
  params: { bookID: string };
}) {
  const book = await getSingleBook(params?.bookID);
  return (
    <div className=" flex items-center justify-between bg-gray-100 rounded-lg shadow-lg p-8  mt-11 max-w-screen-lg mx-auto">
      {/* Left side with book details */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{book.result.title}</h2>
        <p className="text-sm text-gray-600 font-semibold hover:text-indigo-700 cursor-pointer mb-2">-- by {book.result.author.name}</p>
        <p className="text-gray-700">
          {book.result.description}
        </p>
        <button className="mt-4 bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <Link href={book.result.file} target="_blank" >Download</Link>
        </button>
      </div>
      {/* Right side with book image */}
      <div className="flex-none ml-6">
        <Image 
          src={book.result.coverImage}
          alt="Book Cover"
          width={100}
          height={100}
          className="w-32 h-48 object-cover rounded-lg"
        />
      </div>
    </div>
  );
}

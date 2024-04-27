import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-300">
      <div className="flex justify-between items-center px-4 py-2 max-w-screen-lg mx-auto border-b border-gray-300">
        <div>
          <Link href={"/"}>
            <div className="text-2xl font-bold text-indigo-700">Book Store</div>
          </Link>
        </div>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Sign in
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

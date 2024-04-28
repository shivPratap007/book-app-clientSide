export default function Footer() {
    return (
      <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
        <div className="max-w-screen-lg mx-auto">
          {/* Upper section with three columns */}
          <div className="container mx-auto px-4 flex justify-center items-center flex-col border-b-slate-700 border-b-2  py-8  lg:flex-row gap-6">
            {/* First column */}
            <div className="mb-4 lg:mb-0 lg:w-1/4">
              <h2 className="text-xl font-semibold mb-2">Latest Books</h2>
              <p className="text-sm">
                Explore our newest arrivals and discover your next favorite read.
              </p>
            </div>
            {/* Second column */}
            <div className="mb-4 lg:mb-0 lg:w-1/4">
              <h2 className="text-xl font-semibold mb-2">Featured Authors</h2>
              <p className="text-sm">
                Learn more about the talented authors behind the books you love.
              </p>
            </div>
            {/* Third column */}
            <div className="lg:w-1/4">
              <h2 className="text-xl font-semibold mb-2">Stay Updated</h2>
              <p className="text-sm">
                Subscribe to our newsletter for the latest news and recommendations.
              </p>
            </div>
          </div>
          {/* Lower section with two sides */}
          <div className="container mx-auto px-4 flex justify-between mt-10">
            {/* Left side */}
            <div>
              <h2 className="text-lg font-bold">BOOK STORE</h2>
            </div>
            {/* Right side */}
            <div className="flex space-x-4">
              <a href="#" className="text-sm">
                ABOUT
              </a>
              <a href="#" className="text-sm">
                HELP
              </a>
              <a href="#" className="text-sm">
                LEGAL
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        {/* Left Side - Quote */}
        <div className="lg:w-1/2 mb-4 lg:mb-0 lg:mr-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Reading is a conversation. All books talk. But a good book listens as well.</h2>
          <p className="text-gray-600">- Mark Haddon</p>
        </div>
        
        {/* Right Side - Book Image */}
        <div className="lg:w-1/2">
          <Image src="https://images.unsplash.com/photo-1512580770426-cbed71c40e94?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Book Image" className="w-full h-auto rounded-lg" width={100} height={100} priority unoptimized={true} />
        </div>
      </div>
    </div>
  );
};

export default Banner;

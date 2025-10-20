// app/page.js (Next.js 13+ with App Router)
// OR pages/index.js (Next.js 12 Pages Router)

import Link from "next/link";

export default function page() {
  return (
    <div className="overflow-x-hidden ">    

      {/* Main Content */}
      <div className="px-6 py-8">
        <div className="container flex justify-between mx-auto">
          {/* Left Section */}
          <div className="w-full lg:w-8/12">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-700 md:text-2xl">Post</h1>
              <div>
                <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Latest</option>
                  <option>Last Week</option>
                </select>
              </div>
            </div>

            {/* Example Post */}
            <div className="mt-6">
              <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                  <span className="font-light text-gray-600">Jun 1, 2020</span>
                  <Link href="#" className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500">
                    Laravel
                  </Link>
                </div>
                <div className="mt-2">
                  <Link href="#" className="text-2xl font-bold text-gray-700 hover:underline">
                    Build Your New Idea with Laravel Framework.
                  </Link>
                  <p className="mt-2 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque.
                  </p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <Link href="#" className="text-blue-500 hover:underline">
                    Read more
                  </Link>
                  <div>
                    <Link href="#" className="flex items-center">
                      <img
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=80&q=80"
                        alt="avatar"
                        className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
                      />
                      <h1 className="font-bold text-gray-700 hover:underline">Alex John</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Repeat for more posts... */}
          </div>

          {/* Right Sidebar */}
          <div className="hidden w-4/12 -mx-8 lg:block">
            <div className="px-8">
              <h1 className="mb-4 text-xl font-bold text-gray-700">Authors</h1>
              <div className="flex flex-col max-w-sm px-6 py-4 mx-auto bg-white rounded-lg shadow-md">
                <ul className="-mx-4">
                  <li className="flex items-center">
                    <img
                      src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=80&q=80"
                      alt="avatar"
                      className="object-cover w-10 h-10 mx-4 rounded-full"
                    />
                    <p>
                      <Link href="#" className="mx-1 font-bold text-gray-700 hover:underline">
                        Alex John
                      </Link>
                      <span className="text-sm font-light text-gray-700">Created 23 Posts</span>
                    </p>
                  </li>
                  {/* Add more authors here */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

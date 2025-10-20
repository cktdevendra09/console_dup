"use client";

export default function ProfilePage() {
  return (
    <>      

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex flex-col items-center">
                <img
                  src="https://avatars2.githubusercontent.com/u/24622175?s=60&v=4"
                  alt="Profile"
                  className="h-24 w-24 rounded-full"
                />
                <h2 className="mt-4 text-lg font-semibold text-gray-900">
                  Devendra Kumar
                </h2>
                <p className="text-sm text-gray-600">Software Developer</p>
                <p className="text-sm text-gray-600">Noida, India</p>
              </div>
            </div>

            <div className="mt-6 bg-white p-6 rounded-lg shadow">
              <h3 className="text-md font-semibold text-gray-900">
                Similar Profiles
              </h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-center space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="User"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Rajesh Sharma
                    </p>
                    <p className="text-xs text-gray-600">Java Developer</p>
                  </div>
                </li>
                <li className="flex items-center space-x-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="User"
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Neha Verma
                    </p>
                    <p className="text-xs text-gray-600">React Developer</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Content */}
          <div className="md:col-span-2 space-y-6">
            
          
               
              {/* Extra Chatbot Card */}
              <div className="w-full p-6 bg-white rounded-lg hover:shadow">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold">Extra Chatbot</h3>
                  <button className="p-1 text-gray-500 transition-colors rounded hover:bg-gray-100 focus:outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button>
                </div>
                <p className="mt-2 text-sm text-gray-700">
                Passionate software developer with experience in Java, Spring
                Boot, React.js, and Next.js. Interested in creating scalable web
                applications and learning new technologies.
                 </p>
                {/* <div className="flex items-center mt-6">
                  <span className="text-2xl font-bold">$9</span>
                  <span className="ml-1 text-sm text-gray-600">/ month</span>
                  <button className="ml-auto px-5 py-2 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded hover:bg-blue-700 hover:border-blue-700">
                    Add-On
                  </button>
                </div> */}
              </div>
            










            {/* Experience */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Experience</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <p className="text-sm font-medium text-gray-900">
                    Java Developer @ Edunext Technologies
                  </p>
                  <p className="text-xs text-gray-600">June 2025 - Present</p>
                  <p className="text-sm text-gray-700">
                    Working on backend APIs using Spring Boot and integrating
                    with frontend React.js applications.
                  </p>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-900">Education</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <p className="text-sm font-medium text-gray-900">
                    MCA - Master of Computer Applications
                  </p>
                  <p className="text-xs text-gray-600">2021 - 2024</p>
                  <p className="text-sm text-gray-700">
                    Studied Computer Science, specialized in Java development
                    and web technologies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

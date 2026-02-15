"use client";

export default function Doubts() {
  return (
    <div className="w-full bg-white shadow-xl rounded-lg flex overflow-x-auto custom-scrollbar">
      {/* Sidebar */}
      <div className="w-64 px-4">
        <div className="h-16 flex items-center">
          <button className="w-48 mx-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span>Compose</span>
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="px-2 pt-4 pb-8 border-r border-gray-300">
          <ul className="space-y-2">
            {[
              { label: "Inbox", count: 3, active: true },
              { label: "Starred" },
              { label: "Snoozed" },
              { label: "Important" },
              { label: "Sent" },
              { label: "Drafts", count: 1 },
              { label: "Spam" },
              { label: "Trash" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  className={`flex items-center justify-between py-1.5 px-4 rounded cursor-pointer transition ${
                    item.active
                      ? "bg-gray-500 bg-opacity-30 text-blue-600"
                      : "hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 text-gray-700"
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7"
                      />
                    </svg>
                    <span>{item.label}</span>
                  </span>
                  {item.count && (
                    <span className="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                      {item.count}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4">
        {/* Top bar */}
        <div className="h-16 flex items-center justify-between border-b">
          <div className="flex items-center space-x-3">
            <button className="flex items-center text-gray-700 px-2 py-1 space-x-0.5 border border-gray-300 rounded-lg shadow hover:bg-gray-200 transition duration-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-bold">Back</span>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button className="bg-gray-200 text-gray-400 p-1.5 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1.5 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Email Content */}
        <div className="p-6">
          <h4 className="text-lg font-bold text-gray-800 border-b-2 pb-2 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </h4>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <img
                src="https://vojislavd.com/ta-template-demo/assets/img/message3.jpg"
                alt="User"
                className="h-8 w-8 rounded-full border border-gray-500"
              />
              <div className="ml-2">
                <span className="text-sm font-semibold">Betty Garmon</span>
                <span className="block text-xs text-gray-400">
                  From: bettygarmon@example.com
                </span>
              </div>
            </div>
            <span className="text-sm text-gray-500">
              Jan 30, 2022, 10:23 AM
            </span>
          </div>

          <div className="text-gray-700 space-y-4">
            <p>Hi John!</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <ul className="list-disc ml-6">
              <li>voluptatem accusantium</li>
              <li>doloremque laudantium</li>
              <li>totam rem aperiam</li>
              <li>eaque ipsa quae ab illo inventore veritatis</li>
              <li>quasi architecto</li>
            </ul>
            <p>Regards,</p>
            <p>Betty Garmon</p>
          </div>
        </div>
      </div>
    </div>
  );
}

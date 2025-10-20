export default function TopicCardUI() {
  return (
    <div className="">
      {/* Card */}
      <div className="bg-white p-8  rounded-lg shadow-lg">
        
        {/* Header */}
        <header className="flex font-light text-sm items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 rotate-90 -ml-2 mr-2"
            viewBox="0 0 24 24"
            stroke="#b91c1c"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
          <p>TECH BLOG</p>
        </header>

        {/* Title */}
        <h2 className="font-bold text-3xl mt-2">
          Rapid Event Notification System at Netflix
        </h2>

        {/* Tags */}
        <p className="mt-5">
          By:
          <a href="#" className="text-red-600"> Ankush Gulati </a>,
          <a href="#" className="text-red-600"> David Gevorkyan </a>
        </p>

        <p>
          Additional credits:
          <a href="#" className="text-red-600"> Michael Clark </a>,
          <a href="#" className="text-red-600"> Gokhan Ozer </a>
        </p>

        {/* Description */}
        <h3 className="font-bold text-xl mt-8">Intro</h3>
        <p className="font-light">
          Netflix has more than 220 million active members who perform a variety of actions throughout each session, ranging from renaming a profile to watchi...
        </p>

        {/* Button */}
        <button className="bg-red-600 text-white font-semibold py-2 px-5 text-sm mt-6 inline-flex items-center group rounded-md hover:bg-red-700 transition">
          <p>READ MORE</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 group-hover:translate-x-2 transition-transform duration-200 ease-in-out"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

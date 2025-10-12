import Image from 'next/image'
import React from 'react'

const CodeContestUI = () => {
  return (
    <>
     <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="relative flex w-full max-w-[48rem] flex-col md:flex-row rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
        
        {/* Image Section */}
        <div className="relative w-full md:w-2/5">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80"
            alt="Lyft Launching Service"
            width={800}
            height={600}
            className="h-64 md:h-full w-full object-cover"            
          />
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <h6 className="mb-4 text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500">
            startups
          </h6>

          <h4 className="mb-2 text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900">
            Lyft launching cross-platform service this week
          </h4>

          <p className="mb-8 text-base font-normal leading-relaxed text-gray-700">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software company
            selling licenses. Yet its own business model disruption is only part of
            the story.
          </p>

          <a href="#" className="inline-block">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg py-3 px-6 text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-4 text-center text-sm text-gray-700">
        Made with{" "}
        <a
          className="font-semibold text-gray-700"
          href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents"
          target="_blank"
        >
          
          Material Tailwind
        </a>{" "}
        by{" "}
        <a
          href="https://www.creative-tim.com?ref=tailwindcomponents"
          className="font-semibold text-gray-700"
          target="_blank"
        >
          Creative Tim
        </a>
        .
      </div>
    </div>
    </>
  )
}

export default CodeContestUI
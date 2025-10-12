import React from 'react'

function TopicCardUi() {
  return (
    <>

    <div className="m-4">
      {/* Card */}
      <div className="relative flex w-96 flex-col rounded-xl bg-white text-gray-700 shadow-md overflow-hidden">
        <div className="p-6">
          <h5 className="mb-2 text-xl font-semibold text-gray-900">
            UI/UX Review Check
          </h5>
          <p className="text-base font-light leading-relaxed">
            The place is close to Barceloneta Beach and bus stop just 2 min by walk
            and near to "Naviglio" where you can enjoy the main night life in
            Barcelona.
          </p>
        </div>
        <div className="p-6 pt-0">
          <button
            type="button"
            className="rounded-lg bg-pink-500 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/40 active:opacity-85 disabled:opacity-50"
          >
            Read More
          </button>
        </div>
      </div>      
    </div>
    </>
  )
}

export default TopicCardUi

export default function Challenge() {
  return (
    <div className="bg-white pb-4 px-4 rounded-md w-full">            

      {/* Search */}
      <div className="w-full flex justify-end px-2 mt-2">
        <div className="w-full sm:w-64 inline-block relative mt-2">
          <input
            type="text"
            className="leading-snug border border-gray-300 block w-full bg-gray-100 text-sm text-gray-600 py-1 px-4 pl-8 rounded-lg"
            placeholder="Search"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-300">
            <svg
              className="fill-current h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto mt-6">
        <table className="table-auto border-collapse w-full">
          <thead>
            <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
              <th className="px-4 py-2 bg-gray-100 rounded-tl-lg">
                Title
              </th>
              <th className="px-4 py-2 bg-gray-100">Author</th>
              <th className="px-4 py-2 bg-gray-100 rounded-tr-lg">
                Views
              </th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            <tr className="hover:bg-gray-100 border-b border-gray-200">
              <td className="px-4 py-4">Intro to CSS</td>
              <td className="px-4 py-4">Adam</td>
              <td className="px-4 py-4">858</td>
            </tr>

            <tr className="hover:bg-gray-100 border-b border-gray-200">
              <td className="px-4 py-4 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-current w-5 h-5 mr-5"
                  viewBox="0 -98 512 512"
                >
                  <path d="M17.453 89.8h54.89c9.626 0 17.454-7.831 17.454-17.456v-54.89C89.797 7.831 81.969 0 72.344 0h-54.89C7.827 0 0 7.828 0 17.453v54.89c0 9.626 7.828 17.458 17.453 17.458zM15 17.454A2.457 2.457 0 0117.453 15h54.89a2.457 2.457 0 012.454 2.453v54.89a2.457 2.457 0 01-2.453 2.454h-54.89A2.457 2.457 0 0115 72.344zm0 0M494.547 0h-47.852c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5h47.852A2.457 2.457 0 01497 17.453v54.89a2.457 2.457 0 01-2.453 2.454H132.012a2.457 2.457 0 01-2.453-2.453v-54.89A2.457 2.457 0 01132.012 15h279.293c4.14 0 7.5-3.36 7.5-7.5s-3.36-7.5-7.5-7.5H132.012c-9.625 0-17.453 7.828-17.453 17.453v54.89c0 9.626 7.828 17.454 17.453 17.454h362.535c9.625 0 17.453-7.828 17.453-17.453v-54.89C512 7.827 504.172 0 494.547 0zm0 0..." />
                </svg>
                A Long and Winding Tour of the History of UI Frameworks and Tools
              </td>
              <td className="px-4 py-4">Adam</td>
              <td className="px-4 py-4">112</td>
            </tr>

            <tr className="hover:bg-gray-100 border-b border-gray-200">
              <td className="px-4 py-4">Intro to JavaScript</td>
              <td className="px-4 py-4">Chris</td>
              <td className="px-4 py-4">1,280</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-center border-t border-gray-100 pt-4 items-center">
        <svg
          className="h-6 w-6 opacity-40"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 12c0 .265.105.52.293.707L13.293 16.707c.39.391 1.024.391 1.414 0s.39-1.024 0-1.414L11.414 12l3.293-3.293c.39-.39.39-1.024 0-1.414s-1.024-.39-1.414 0L9.293 11.293A1 1 0 009 12z"
            fill="#2C2C2C"
          />
        </svg>
        <p className="mx-2 text-blue-600 text-sm cursor-pointer">1</p>
        <p className="mx-2 text-sm cursor-pointer hover:text-blue-600">2</p>
        <p className="mx-2 text-sm cursor-pointer hover:text-blue-600">3</p>
        <p className="mx-2 text-sm cursor-pointer hover:text-blue-600">4</p>
        <svg
          className="h-6 w-6 text-blue-500"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 12c0-.265-.105-.52-.293-.707L10.707 7.293a1 1 0 10-1.414 1.414L12.586 12l-3.293 3.293a1 1 0 101.414 1.414l4.293-4.293A1 1 0 0015 12z"
            fill="#18A0FB"
          />
        </svg>
      </div>
    </div>
  );
}

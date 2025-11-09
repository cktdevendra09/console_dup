import Link from "next/link";
import { DASHBOARD_LINKS } from "@/app/dashboard/config/routes";
import CommentComp from "@/app/dashboard/components/doubts/CommentComp";
import {
  BookmarkIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import ReplyBoxComp from "@/app/dashboard/components/doubts/ReplyBoxComp";
import LikesAndCommentsComp from "@/app/dashboard/components/doubts/LikesAndCommentsComp";

const DetailsDoubts = () => {
  return (
    <div className="container mx-auto p-6">
      {/* <h1 className="text-2xl font-semibold mb-4 text-gray-800">All Doubts </h1> */}
       <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4">
        {/* DOUBTS DETAILS */}
         <div className="lg:col-span-8">
          <div className="space-y-6">
            {/* FIRST POST */}
            <div className="bg-white shadow rounded-lg mb-6">
              <div className="flex flex-row px-2 py-3 mx-3">
                <div className="w-auto h-auto rounded-full">
                  <img
                    className="w-12 h-12 object-cover rounded-full shadow cursor-pointer"
                    alt="User avatar"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=2000&q=80"
                  />
                </div>
                <div className="flex flex-col mb-2 ml-4 mt-1">
                  <div className="text-gray-600 text-sm font-semibold">
                    John Doe
                  </div>
                  <div className="flex w-full mt-1">
                    <div className="text-blue-700 text-xs mr-1 cursor-pointer">
                      SEO
                    </div>
                    <div className="text-gray-400 text-xs">
                      • 30 seconds ago
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-100"></div>

              {/* IMAGES GRID */}
              <div className="text-gray-400 text-sm mb-7 mt-6 mx-3 px-2">
                <div className="grid grid-cols-6 gap-2">
                  {[
                    "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
                    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
                    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
                    "https://images.unsplash.com/photo-1503602642458-232111445657",
                    "https://images.unsplash.com/photo-1560393464-5c69a73c5770",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className={`relative overflow-hidden rounded-xl ${
                        i < 2
                          ? "col-span-3 max-h-[14rem]"
                          : "col-span-2 max-h-[10rem]"
                      }`}
                    >
                      {i === 4 && (
                        <div className="text-white text-xl absolute inset-0 bg-slate-900/80 flex justify-center items-center">
                          + 23
                        </div>
                      )}
                      <img
                        className="h-full w-full object-cover"
                        src={src}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-gray-500 text-sm mb-6 mx-3 px-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex justify-between items-center mb-4 border-t border-gray-100 px-5 pt-2">
                <div className="flex items-center space-x-2">
                  <span className="bg-white border w-8 h-8 flex justify-center items-center text-gray-400 hover:text-red-500 rounded-full cursor-pointer">
                    <BookmarkIcon className="w-4 h-4" />
                  </span>
                  {[...Array(4)].map((_, i) => (
                    <img
                      key={i}
                      className={`inline-block object-cover w-8 h-8 border-2 border-white rounded-full shadow-sm cursor-pointer ${
                        i > 0 ? "-ml-2" : ""
                      }`}
                      src={
                        [
                          "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc",
                          "https://images.unsplash.com/photo-1550525811-e5869dd03032",
                          "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                        ][i]
                      }
                      alt=""
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <span className="transition ease-out duration-300 bg-blue-100 hover:bg-blue-50 w-8 h-8 flex justify-center items-center text-blue-400 rounded-full cursor-pointer">
                    <ChatBubbleOvalLeftIcon className="w-4 h-4" />
                  </span>
                  <span className="bg-gray-100 hover:bg-gray-50 w-8 h-8 flex justify-center items-center rounded-full cursor-pointer">
                    <HeartIcon className="w-4 h-4 text-red-500" />
                  </span>
                </div>
              </div>

              {/* STATS */}
              <LikesAndCommentsComp />

              <CommentComp />
              <ReplyBoxComp />
            </div>
          </div>
        </div>

        {/* ADVETIESMENT  */}
        <div className="lg:col-span-4 bg-white shadow rounded-lg ">
          <p>advertisement </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsDoubts;

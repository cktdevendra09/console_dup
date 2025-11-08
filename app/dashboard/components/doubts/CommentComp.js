"use client";

import React from "react";
import { HeartIcon, ChatBubbleBottomCenterTextIcon, ArrowUpTrayIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const CommentComp = () => {
  return (
      <div className="text-black p-4 flex w-full">
          <img
            className="rounded-full h-8 w-8 mr-2 mt-1"
            src="https://picsum.photos/id/1027/200/200"
            alt=""
          />
          <div>
            <div className="bg-gray-100 rounded-lg px-4 py-2">
              <div className="font-semibold text-sm">Sara Lauren</div>
              <div className="text-xs text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
            <div className="text-xs mt-1 text-gray-500">14 w</div>
          </div>
        </div>
  );
};

export default CommentComp;

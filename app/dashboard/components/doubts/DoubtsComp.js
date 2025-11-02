"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CommentComp from "./CommentComp";

export default function DoubtsComp() {
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (reply.trim() === "") return;
    setReplies([...replies, reply]);
    setReply("");
  };

  return (
    <div className="max-w-4xl bg-white rounded-lg shadow-md">
      <div className="max-w-4xl px-10 my-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center">
            <Link href="#" className="flex items-center">
            <img
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?auto=format&fit=crop&w=373&q=80"
                alt="avatar"
                width={40}
                height={40}
                className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            />
            <h1 className="text-gray-700 font-bold">Khatab Wedaa</h1>
            </Link>
            
            <Link
            href="#"
            className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
            >
            Design
            </Link>
        </div>

        {/* Title & Description */}
        <div className="mt-2">
            <Link
            href="#"
            className="text-2xl text-gray-700 font-bold hover:text-gray-600"
            >
            Accessibility tools for designers and developers
            </Link>
            <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
            enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
            ratione libero!
            </p>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
            <Link href="#" className="text-blue-600 hover:underline">
            Read more
            </Link>      
        </div>
      </div>

      <CommentComp />

      
    </div>
  );
}

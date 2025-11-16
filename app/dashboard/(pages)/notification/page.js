"use client";

import React from "react";
import {
  BellIcon,
  CheckCircleIcon,
  InformationCircleIcon,
  ExclamationCircleIcon,
} from "@heroicons/react/24/outline";

export default function NotificationPage() {
  const notifications = [
    {
      id: 1,
      user: "James Doe",
      message: "favourited an item",
      time: "2 hours ago",
      icon: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
    },
    {
      id: 2,
      user: "Sash",
      message: "added you to the group: UX Designers",
      time: "3 hours ago",
      icon: <InformationCircleIcon className="w-5 h-5 text-blue-500" />,
    },
    {
      id: 3,
      user: "Sarah",
      message: "posted in the thread: Update gone wrong",
      time: "4 hours ago",
      icon: <ExclamationCircleIcon className="w-5 h-5 text-yellow-500" />,
    },
    {
      id: 4,
      user: "System",
      message: "Low on storage: 2.5/32GB remaining",
      time: "5 hours ago",
      icon: <ExclamationCircleIcon className="w-5 h-5 text-red-500" />,
    },
    {
      id: 5,
      user: "Order Bot",
      message: "Shipment delayed for order #25551",
      time: "Yesterday",
      icon: <BellIcon className="w-5 h-5 text-purple-500" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto p-6">
      {/* LEFT COLUMN — NOTIFICATIONS */}
      <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <BellIcon className="w-5 h-5 text-indigo-600" />
            Notifications
          </h2>
          <span className="text-sm text-gray-500">{notifications.length}</span>
        </div>

        {/* Notification List */}
        <div className="divide-y divide-gray-100">
          {notifications.map((n) => (
            <div
              key={n.id}
              className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition"
            >
              <div className="flex-shrink-0 mt-1">{n.icon}</div>
              <div>
                <p className="text-sm text-gray-800">
                  <span className="font-medium text-indigo-700">{n.user}</span>{" "}
                  {n.message}
                </p>
                <p className="text-xs text-gray-500 mt-1">{n.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="border-t px-4 py-3 bg-gray-50 text-center">
          <button
            className="text-sm font-medium text-indigo-600 hover:underline"
            onClick={() => alert("View all notifications")}
          >
            See more
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN — ADVERTISEMENT */}
      <div className="bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden flex flex-col justify-between">
        {/* Ad Header */}
        <div className="px-4 py-3 border-b">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            Sponsored
          </h2>
        </div>

        {/* Advertisement Content */}
        <div className="p-4 flex-1 flex flex-col items-center justify-center text-center">
          <img
            src="https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=400&q=80"
            alt="Ad"
            className="rounded-lg shadow-md mb-4 w-full object-cover"
          />
          <h3 className="text-md font-semibold text-gray-800 mb-2">
            Upgrade Your Workflow
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Try our premium features to boost your productivity and manage your
            team more effectively.
          </p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { Bell, AlertCircle, CheckCircle, Info } from "lucide-react";

export default function NotificationPage() {
  const notifications = [
    {
      id: 1,
      user: "James Doe",
      message: "favourited an item",
      time: "2 hours ago",
      icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    },
    {
      id: 2,
      user: "Sash",
      message: "added you to the group: UX Designers",
      time: "3 hours ago",
      icon: <Info className="w-5 h-5 text-blue-500" />,
    },
    {
      id: 3,
      user: "Sarah",
      message: "posted in the thread: Update gone wrong",
      time: "4 hours ago",
      icon: <AlertCircle className="w-5 h-5 text-yellow-500" />,
    },
    {
      id: 4,
      user: "System",
      message: "Low on storage: 2.5/32GB remaining",
      time: "5 hours ago",
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    },
    {
      id: 5,
      user: "Order Bot",
      message: "Shipment delayed for order #25551",
      time: "Yesterday",
      icon: <Bell className="w-5 h-5 text-purple-500" />,
    },
  ];

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Bell className="w-5 h-5 text-indigo-600" />
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
          See all notifications
        </button>
      </div>
    </div>
  );
}

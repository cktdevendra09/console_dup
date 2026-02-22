"use client";

import {
  BellIcon,
  CalendarIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CARD_CLASS } from "./components/Comman/DESIGN";

const chartData = [
  { day: "01", thisMonth: 7, lastMonth: 6 },
  { day: "02", thisMonth: 5, lastMonth: 4 },
  { day: "03", thisMonth: 8, lastMonth: 7 },
  { day: "04", thisMonth: 6, lastMonth: 5 },
  { day: "05", thisMonth: 9, lastMonth: 6 },
  { day: "06", thisMonth: 7, lastMonth: 5 },
  { day: "07", thisMonth: 10, lastMonth: 8 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-6 p-4 sm:p-6 ">

      {/* MAIN CONTENT */}
      <div className="flex-1">

        {/* Greeting */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">
              Hello, Devendra 👋
            </h1>
            <p className="text-gray-500 text-sm">
              Track your learning progress & stay motivated!
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <CalendarIcon className="w-5 h-5 text-gray-500" />
            <span>16 May, 2025</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Finished</p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-2">18</h2>
            <p className="text-green-500 text-xs mt-1">+8 tasks</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Tracked</p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-2">31h</h2>
            <p className="text-red-500 text-xs mt-1">-6 hours</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm">Efficiency</p>
            <h2 className="text-xl sm:text-2xl font-semibold mt-2">93%</h2>
            <p className="text-green-500 text-xs mt-1">+12%</p>
          </div>
        </div>

        {/* Performance Chart */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h3 className="text-lg font-semibold">Performance</h3>

            <button className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-md text-sm text-gray-600 w-fit">
              01–07 May <ChevronDownIcon className="w-4 h-4" />
            </button>
          </div>

          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={chartData}>
              <XAxis dataKey="day" stroke="#bcbcbc" />
              <YAxis stroke="#bcbcbc" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="thisMonth"
                stroke="#4f46e5"
                strokeWidth={3}
              />
              <Line
                type="monotone"
                dataKey="lastMonth"
                stroke="#f59e0b"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Current Tasks */}
        <div className={CARD_CLASS.CARD}>
          <h3 className="text-lg font-semibold mb-4">Current Tasks</h3>

          <ul className="space-y-4">
            {[
              {
                title: "Product Review for U18 Market",
                status: "In progress",
                time: "4h",
              },
              {
                title: "UX Research for Product",
                status: "On hold",
                time: "8h",
              },
              {
                title: "App design & development",
                status: "Done",
                time: "32h",
              },
            ].map((task, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1"
              >
                <div>
                  <p className="font-medium">{task.title}</p>
                  <p className="text-xs text-gray-500">{task.status}</p>
                </div>
                <p className="text-sm text-gray-600">{task.time}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="w-full lg:w-[300px] space-y-6">

        {/* User Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="text-center">
            <img
              src="https://i.pravatar.cc/100"
              className="w-20 h-20 rounded-full mx-auto"
              alt="Profile"
            />
            <h3 className="text-lg font-semibold mt-3">
              Devendra Gupta
            </h3>
            <p className="text-gray-500 text-sm">@devendra</p>
          </div>

          <div className="flex justify-center gap-4 mt-4">
            <BellIcon className="w-5 h-5 text-gray-600" />
            <CalendarIcon className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        {/* Activity */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold mb-4">Activity</h3>

          <div className="space-y-4 text-sm">
            <div>
              <p className="font-medium">Floyd Miles</p>
              <p className="text-xs text-gray-500">
                Commented on Stark Project
              </p>
              <p className="text-gray-600 mt-1">
                “We will start next week…”
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="font-medium">Guy Hawkins</p>
              <p className="text-xs text-gray-500">
                Uploaded Homepage.fig
              </p>
            </div>

            <div className="border-t pt-4">
              <p className="font-medium">Kristin Watson</p>
              <p className="text-xs text-gray-500">
                Commented on 7Heroes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
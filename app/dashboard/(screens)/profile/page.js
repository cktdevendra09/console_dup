"use client";

import {
  PencilIcon, TrashIcon,
  CodeBracketIcon,
  ShareIcon,
  GlobeAltIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowTrendingUpIcon,
  ArrowsRightLeftIcon,
  EyeIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  EllipsisVerticalIcon,
  PencilSquareIcon, BriefcaseIcon, PlusCircleIcon,
} from "@heroicons/react/24/outline";

import {
  cardClasses,
  input,
  label,
  heading,
  primaryButton,
  secondaryButton,
  smallButton,
} from "@/app/dashboard/components/Comman/DashboardUiUtility";
import Link from "next/link";
import { PROFILE_MENU } from "../../config/DashboardRoutes";



export default function ProfilePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* LEFT PANEL */}
        <div className="lg:w-1/3 space-y-6">

          {/* Profile Card */}
          <div className=" bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300  text-center">

            {/* Edit Button */}
            <button className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105 active:scale-95">
              <PencilSquareIcon className="w-5 h-5" />
            </button>

            <div className="relative inline-block mb-6">
              <img
                className="w-32 h-32 rounded-full object-cover ring-4 ring-primary/10 p-1 bg-white dark:bg-slate-800"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbBvof1zvAxYBPJrD7nE4yPvNTqgt5XE6NFSXXKy1fmnM8Uitp1pv2aAYZLtz-KiC4QOrmNzveOmg3kLm_lCVjbMIryf-nSYfq6uGp1zwKzpP3sw-Y2BxO2dpJPmCoWXW1zzTLA8W8K6OEGbag7vjifsHppv0c7S-tIxLTFyQvQXoW713IBHIGk4uJ70hfa8g7nEH5Aq86H_-QcuX4qNnDCjbAeiHScaqczcgW_y6vHoHeRldMcITV5Q61IRvJaZakoFDarREM0Rg1"
                alt="Augusta Ryan"
              />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-4 border-white dark:border-slate-900 rounded-full"></div>
            </div>

            <h2 className="text-2xl font-bold mb-1">Augusta Ryan</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">
              Project Director
            </p>

            {/* Social */}
            <div className="flex justify-center gap-4 mb-8">
              <a className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all">
                <CodeBracketIcon className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all">
                <ShareIcon className="w-5 h-5" />
              </a>
              <a className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all">
                <GlobeAltIcon className="w-5 h-5" />
              </a>
            </div>

            {/* Skills */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-8 text-left">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "TypeScript", "GraphQL", "Docker"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 text-xs font-semibold rounded-full bg-slate-100 dark:bg-slate-800"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className={cardClasses()}>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-primary" />
                augusta.ryan@devflow.io
              </div>
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 text-primary" />
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="lg:w-2/3 space-y-6">

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className={cardClasses()}>
              <p className="text-xs font-bold uppercase text-slate-500 mb-1">
                Total Commits
              </p>
              <p className="text-3xl font-bold">1,284</p>
              <div className="mt-2 text-xs flex items-center gap-1 font-medium text-emerald-500">
                <ArrowTrendingUpIcon className="w-4 h-4" />
                +12% this month
              </div>
            </div>

            <div className={cardClasses()}>
              <p className="text-xs font-bold uppercase text-slate-500 mb-1">
                Pull Requests
              </p>
              <p className="text-3xl font-bold">412</p>
              <div className="mt-2 text-xs flex items-center gap-1 font-medium text-primary">
                <ArrowsRightLeftIcon className="w-4 h-4" />
                89% merge rate
              </div>
            </div>

            <div className={cardClasses()}>
              <p className="text-xs font-bold uppercase text-slate-500 mb-1">
                Code Reviews
              </p>
              <p className="text-3xl font-bold">256</p>
              <div className="mt-2 text-xs flex items-center gap-1 font-medium text-purple-500">
                <EyeIcon className="w-4 h-4" />
                48 this week
              </div>
            </div>

          </div>

          <div className={cardClasses()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">
                Education Overview
              </h3>

              <Link href={PROFILE_MENU.EDUCATION_ADD} className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition">

                <PlusCircleIcon className="w-5 h-5" />

                Add New
              </Link>
            </div>

            <div className="space-y-6">

              {/* Education Item 1 */}
              <div className="flex justify-between items-start border-b border-slate-200 dark:border-slate-700 pb-5">

                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">
                    B.Tech in Computer Science
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    XYZ University — Rudrapur, India
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    2018 – 2022
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    GPA: 8.5 / 10
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                    <PencilIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  </button>

                  <button className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition">
                    <TrashIcon className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>

              {/* Education Item 2 */}
              <div className="flex justify-between items-start">

                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-white">
                    Senior Secondary (PCM)
                  </h4>

                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    ABC School — Uttarakhand, India
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    2016 – 2018
                  </p>

                  <p className="text-xs text-slate-500 mt-1">
                    Percentage: 85%
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                    <PencilIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  </button>

                  <button className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition">
                    <TrashIcon className="w-4 h-4 text-red-500" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Current Projects */}
          {/* <div className={cardClasses()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Current Projects</h3>
              <a className="text-sm font-semibold text-primary hover:underline">
                View all repos
              </a>
            </div>

            <div className="space-y-4">

              {[
                {
                  title: "mobile-app-gateway",
                  icon: DevicePhoneMobileIcon,
                  color: "bg-pink-500",
                  updated: "Updated 2h ago",
                  status: "In Progress",
                },
                {
                  title: "core-design-system",
                  icon: GlobeAltIcon,
                  color: "bg-emerald-500",
                  updated: "Updated 5h ago",
                  status: "Maintained",
                },
                {
                  title: "data-sync-worker",
                  icon: CircleStackIcon,
                  color: "bg-blue-500",
                  updated: "Updated 1d ago",
                  status: "Review",
                },
              ].map((project) => {
                const Icon = project.icon;
                return (
                  <div
                    key={project.title}
                    className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${project.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">
                          {project.title}
                        </h4>
                        <p className="text-xs text-slate-500">
                          {project.updated}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="px-3 py-1 text-[10px] font-bold rounded-full uppercase bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                        {project.status}
                      </span>
                      <EllipsisVerticalIcon className="w-5 h-5 text-slate-400 cursor-pointer" />
                    </div>
                  </div>
                );
              })}

            </div>
          </div> */}


          <div className={cardClasses()}>



            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">
                Work Experience
              </h3>

              <Link href={PROFILE_MENU.WORK_EXP_ADD} className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition">

                <PlusCircleIcon className="w-5 h-5" />

                Add New
              </Link>
            </div>


            <div className="space-y-8">

              {/* Experience Item 1 */}
              <div className="flex justify-between items-start border-b border-slate-200 dark:border-slate-700 pb-6">

                {/* Left Content */}
                <div className="flex gap-4">

                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700">
                    <BriefcaseIcon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">
                      Frontend Developer
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      Tech Solutions Pvt Ltd — Remote
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Jan 2022 – Present
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      Developing modern web applications using React and Next.js.
                      Improved UI performance by 30% and collaborated with backend
                      teams to integrate REST APIs.
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                    <PencilIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  </button>

                  <button className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition">
                    <TrashIcon className="w-4 h-4 text-red-500" />
                  </button>
                </div>

              </div>

              {/* Experience Item 2 */}
              <div className="flex justify-between items-start">

                <div className="flex gap-4">

                  <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-700">
                    <BriefcaseIcon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">
                      Web Development Intern
                    </h4>

                    <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                      StartupHub — Bangalore, India
                    </p>

                    <p className="text-xs text-slate-500 mt-1">
                      Jun 2021 – Dec 2021
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                      Assisted in building landing pages and dashboards.
                      Optimized responsive layouts and contributed to improving
                      accessibility compliance.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition">
                    <PencilIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  </button>

                  <button className="p-2 rounded-lg hover:bg-red-100 dark:hover:bg-red-900 transition">
                    <TrashIcon className="w-4 h-4 text-red-500" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
} 
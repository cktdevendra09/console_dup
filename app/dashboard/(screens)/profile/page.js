"use client";

export default function ProfilePage() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
  
      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left panel */}
        <div className="lg:w-1/3 space-y-6">

          {/* Profile Card */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 text-center">
            <div className="relative inline-block mb-6">
              <img
                className="w-32 h-32 rounded-full object-cover ring-4 ring-primary/10 p-1 bg-white dark:bg-slate-800"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbBvof1zvAxYBPJrD7nE4yPvNTqgt5XE6NFSXXKy1fmnM8Uitp1pv2aAYZLtz-KiC4QOrmNzveOmg3kLm_lCVjbMIryf-nSYfq6uGp1zwKzpP3sw-Y2BxO2dpJPmCoWXW1zzTLA8W8K6OEGbag7vjifsHppv0c7S-tIxLTFyQvQXoW713IBHIGk4uJ70hfa8g7nEH5Aq86H_-QcuX4qNnDCjbAeiHScaqczcgW_y6vHoHeRldMcITV5Q61IRvJaZakoFDarREM0Rg1"
                alt="Augusta Ryan"
              />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-4 border-white dark:border-slate-900 rounded-full"></div>
            </div>
            <h2 className="text-2xl font-bold mb-1">Augusta Ryan</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium mb-6">Project Director</p>

            {/* Social buttons */}
            <div className="flex justify-center gap-4 mb-8">
              {["code", "share", "public"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all"
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </a>
              ))}
            </div>

            {/* Skills */}
            <div className="border-t border-slate-100 dark:border-slate-800 pt-8 text-left">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "TypeScript", "GraphQL", "Docker"].map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-full ${
                      skill === "React" ? "bg-cyan-50 dark:bg-cyan-900/20 text-primary" :
                      skill === "Node.js" ? "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400" :
                      skill === "TypeScript" ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" :
                      skill === "GraphQL" ? "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400" :
                      "bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                augusta.ryan@devflow.io
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                San Francisco, CA
              </div>
            </div>
          </div>

        </div>

        {/* Right panel */}
        <div className="lg:w-2/3 space-y-6">
          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Total Commits", value: "1,284", icon: "trending_up", color: "text-emerald-500", subtitle: "+12% this month" },
              { title: "Pull Requests", value: "412", icon: "merge_type", color: "text-primary", subtitle: "89% merge rate" },
              { title: "Code Reviews", value: "256", icon: "visibility", color: "text-purple-500", subtitle: "48 this week" },
            ].map((card) => (
              <div key={card.title} className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 shadow-sm">
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">{card.title}</p>
                <p className="text-3xl font-bold">{card.value}</p>
                <div className={`mt-2 text-xs flex items-center gap-1 font-medium ${card.color}`}>
                  <span className="material-symbols-outlined text-sm">{card.icon}</span> {card.subtitle}
                </div>
              </div>
            ))}
          </div>

          {/* Contribution Activity */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-bold mb-4">Contribution Activity</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">2,415 contributions in the last year</p>
          </div>

          {/* Current Projects */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">Current Projects</h3>
              <a className="text-sm font-semibold text-primary hover:underline" href="#">View all repos</a>
            </div>
            <div className="space-y-4">
              {[
                { title: "mobile-app-gateway", icon: "smartphone", status: "In Progress", updated: "Updated 2h ago" },
                { title: "core-design-system", icon: "web", status: "Maintained", updated: "Updated 5h ago" },
                { title: "data-sync-worker", icon: "storage", status: "Review", updated: "Updated 1d ago" },
              ].map((project) => (
                <div key={project.title} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white ${
                      project.icon === "smartphone" ? "bg-pink-500" :
                      project.icon === "web" ? "bg-emerald-500" : "bg-blue-500"
                    }`}>
                      <span className="material-symbols-outlined">{project.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{project.title}</h4>
                      <p className="text-xs text-slate-500">{project.updated}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="px-3 py-1 text-[10px] font-bold rounded-full uppercase 
                      bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400">
                      {project.status}
                    </span>
                    <span className="material-symbols-outlined text-slate-400 cursor-pointer">more_vert</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
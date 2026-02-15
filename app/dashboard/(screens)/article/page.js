export default function ArticlesPage() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
      {/* Left: Create & Articles Feed */}
      <div className="flex-1 space-y-8">
        {/* Create Post */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex gap-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbBvof1zvAxYBPJrD7nE4yPvNTqgt5XE6NFSXXKy1fmnM8Uitp1pv2aAYZLtz-KiC4QOrmNzveOmg3kLm_lCVjbMIryf-nSYfq6uGp1zwKzpP3sw-Y2BxO2dpJPmCoWXW1zzTLA8W8K6OEGbag7vjifsHppv0c7S-tIxLTFyQvQXoW713IBHIGk4uJ70hfa8g7nEH5Aq86H_-QcuX4qNnDCjbAeiHScaqczcgW_y6vHoHeRldMcITV5Q61IRvJaZakoFDarREM0Rg1"
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <textarea
                placeholder="What's on your technical mind today?"
                className="w-full bg-slate-50 dark:bg-slate-800/50 border-none rounded-2xl p-4 text-sm focus:ring-2 focus:ring-primary/20 resize-none min-h-[100px] outline-none"
              />
              <div className="flex items-center justify-between mt-4">
                <button className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
                  <span className="material-symbols-outlined text-primary">
                    image
                  </span>
                  Add Image
                </button>
                <button className="px-6 py-2 bg-primary text-white rounded-full font-semibold shadow-lg shadow-cyan-500/25 hover:bg-cyan-600 transition-all">
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          {/* Example Article */}
          <article className="bg-white dark:bg-slate-900 rounded-2.5xl shadow-sm border border-slate-100 dark:border-slate-800 overflow-hidden hover:border-primary/30 transition-colors">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE40q-7zbJEE_ys4gHFmS3V58isdbfIwysMwTJSN6HL65LbmFFiuoCWrR0BH996mC2E_en2WIJgNL9C_elQmM8wcaJOrjFWytaAgh0VphxksSD8R2VAOa-TXKSXCx-pAyz0JzDZzxUZ-jNltx9ONDL2jssog38x1eDgiEepI1gRiSlELDcOkvJagfQRLTYo5fwo43OJIeoXC-9K0JuIhkleILiZmXeWOtJkQNH48OZYYF0fSWMPzA8ZJa6DfTnOmjGrvNXkgWJWx5W"
                  alt="Author"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold">Liam Henderson</p>
                  <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                    Senior Frontend Engineer • 2h ago
                  </p>
                </div>
              </div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCtlbDUAk492SVlv-9Lg03-UL8PUt065A2dy9AxMRZXy4HSfgMIhJbzjfSRk6D8n86TQG4PqNEsfqGbL8UgqV-3NXMct9hjGZfBnmJqeg2rllOQxvAb_STbQEkLaxqNBgkW9UU16Un6EZWVFXdQKdrJqmKhY6TmVsLnTJ7h9s_HqsLnQWShfOoPRUR9WeWspB1yWuNXqurjd77p1nZJ2lbJMakxYUzHUQLyYX8o193WCeGFFzYx3oSkpyDL3_KZVQtqJbNHM8fUeJ8"
                alt="Featured"
                className="w-full h-64 object-cover rounded-3xl mb-6"
              />
              <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                Mastering Micro-frontends with React and Module Federation
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Exploring how to scale large applications by breaking them down into independently deployable units...
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="lg:w-80 space-y-8">
        {/* Trending Topics */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2.5xl shadow-sm border border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-bold mb-6">Trending Topics</h3>
          <div className="space-y-4">
            <a href="#" className="group block">
              <p className="text-sm font-bold group-hover:text-primary transition-colors">
                #WebAssembly
              </p>
              <p className="text-xs text-slate-400">2.4k articles</p>
            </a>
          </div>
        </div>

        {/* Top Contributors */}
        <div className="bg-white dark:bg-slate-900 p-8 rounded-2.5xl shadow-sm border border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-bold mb-6">Top Contributors</h3>
        </div>
      </div>
    </div>
  );
}
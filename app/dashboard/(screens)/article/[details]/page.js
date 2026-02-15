export default function ArticleDetailsPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto w-full">
      {/* Main Article */}
      <div className="flex-1 w-full lg:max-w-4xl space-y-12">
        <article className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800">
          {/* Article Header */}
          <header className="mb-8 space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Mastering Micro-frontends with React and Module Federation
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-y border-slate-100 dark:border-slate-800 py-4">
              <div className="flex items-center gap-4">
                <img
                  alt="Author"
                  className="w-14 h-14 rounded-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE40q-7zbJEE_ys4gHFmS3V58isdbfIwysMwTJSN6HL65LbmFFiuoCWrR0BH996mC2E_en2WIJgNL9C_elQmM8wcaJOrjFWytaAgh0VphxksSD8R2VAOa-TXKSXCx-pAyz0JzDZzxUZ-jNltx9ONDL2jssog38x1eDgiEepI1gRiSlELDcOkvJagfQRLTYo5fwo43OJIeoXC-9K0JuIhkleILiZmXeWOtJkQNH48OZYYF0fSWMPzA8ZJa6DfTnOmjGrvNXkgWJWx5W"
                />
                <div>
                  <p className="text-lg font-bold">Liam Henderson</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Senior Frontend Engineer • Oct 24, 2023
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">bookmark</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <img
            alt="Hero"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-xl md:rounded-[2rem] mb-8 shadow-xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCtlbDUAk492SVlv-9Lg03-UL8PUt065A2dy9AxMRZXy4HSfgMIhJbzjfSRk6D8n86TQG4PqNEsfqGbL8UgqV-3NXMct9hjGZfBnmJqeg2rllOQxvAb_STbQEkLaxqNBgkW9UU16Un6EZWVFXdQKdrJqmKhY6TmVsLnTJ7h9s_HqsLnQWShfOoPRUR9WeWspB1yWuNXqurjd77p1nZJ2lbJMakxYUzHUQLyYX8o193WCeGFFzYx3oSkpyDL3_KZVQtqJbNHM8fUeJ8"
          />

          {/* Article Body */}
          <div className="prose prose-slate dark:prose-invert max-w-full">
            <p className="text-lg text-slate-600 dark:text-slate-400">
              In the ever-evolving landscape of web development, scaling
              large-scale applications remains a formidable challenge. Micro-frontends
              allow breaking frontend monoliths into smaller, more manageable pieces.
            </p>
            <h2>Why Module Federation?</h2>
            <p className="text-slate-600 dark:text-slate-400">
              Webpack 5's Module Federation allows multiple builds to form a single application at runtime. Shared dependencies load only once, enabling independent updates.
            </p>
            <pre className="my-6 bg-slate-900 rounded-xl p-4 font-mono text-sm overflow-x-auto text-cyan-400">
              {`// webpack.config.js
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "app_main",
      remotes: {
        auth: "auth@http://localhost:3001/remoteEntry.js",
        dashboard: "dashboard@http://localhost:3002/remoteEntry.js",
      },
      shared: { react: { singleton: true }, "react-dom": { singleton: true } },
    }),
  ],
};`}
            </pre>
            <h2>Key Benefits</h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-400">
              <li>Independent deployments across teams.</li>
              <li>Smaller bundle size via shared modules.</li>
              <li>Tech-agnostic communication between components.</li>
            </ul>
          </div>
        </article>

        {/* Comments */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-12 shadow-sm border border-slate-100 dark:border-slate-800 space-y-6">
          <h3 className="text-2xl font-bold mb-4">Comments (84)</h3>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbBvof1zvAxYBPJrD7nE4yPvNTqgt5XE6NFSXXKy1fmnM8Uitp1pv2aAYZLtz-KiC4QOrmNzveOmg3kLm_lCVjbMIryf-nSYfq6uGp1zwKzpP3sw-Y2BxO2dpJPmCoWXW1zzTLA8W8K6OEGbag7vjifsHppv0c7S-tIxLTFyQvQXoW713IBHIGk4uJ70hfa8g7nEH5Aq86H_-QcuX4qNnDCjbAeiHScaqczcgW_y6vHoHeRldMcITV5Q61IRvJaZakoFDarREM0Rg1"
              alt="User Avatar"
            />
            <textarea
              placeholder="Add to the discussion..."
              className="flex-1 w-full bg-slate-50 dark:bg-slate-800 border-none rounded-xl p-4 text-sm focus:ring-2 focus:ring-primary/20 resize-none min-h-[120px] outline-none"
            />
          </div>
        </div>
      </div>

       
    </div>
  );
}
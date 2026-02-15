"use client";

export default function ArticleCardUI({
  image,
  alt,
  category,
  date,
  readTime,
  title,
  description,
  href = "#",
}) {
  return (
    <article className="group relative bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row h-auto md:h-72">
      {/* Image Section */}
      <div className="relative w-full md:w-2/5 h-64 md:h-full overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"></div>
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          {category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-3 font-sans uppercase tracking-widest">
            <span>{date}</span>
            <span className="h-1 w-1 bg-primary rounded-full"></span>
            <span>{readTime}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300 leading-tight">
            <a href={href}>{title}</a>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 font-display text-lg line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 flex items-center">
          <a
            className="inline-flex items-center text-primary font-bold tracking-tight hover:gap-2 transition-all duration-300"
            href={href}
          >
            <span className="font-sans uppercase text-sm">Read Article</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 8l4 4m0 0l-4 4m4-4H3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

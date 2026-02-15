export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-[#f5f6f4]">
      {/* Navbar */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Acelia</h1>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a className="hover:text-black" href="#">Home</a>
            <a className="hover:text-black" href="#">Services</a>
            <a className="hover:text-black" href="#">About</a>
            <a className="hover:text-black" href="#">More</a>
          </nav>
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm">
            Get Started
          </button>
        </div>
      </header>

      {/* Page Title */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-4xl font-semibold mb-6">Blog & articles</h2>

        {/* Filters */}
        <div className="flex gap-3 flex-wrap mb-10">
          {["All", "Marketing Tips", "Business Strategies", "Industry Insights", "Client Success"].map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 rounded-full border text-sm bg-white hover:bg-black hover:text-white transition"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Featured Section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="rounded-3xl w-full h-[420px] object-cover"
              alt="featured"
            />
          </div>
          <div className="bg-white rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-xs text-gray-500">News</span>
              <h3 className="text-2xl font-semibold mt-2 mb-4">
                Maximizing Efficiency in Operations
              </h3>
              <p className="text-gray-600 text-sm">
                We offer a comprehensive range of services designed to meet the
                unique needs of your business.
              </p>
            </div>
            <button className="mt-6 bg-black text-white px-5 py-2 rounded-full w-fit text-sm">
              Read more
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <h3 className="text-3xl font-semibold mb-8">Latest insights and trends</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                className="h-56 w-full object-cover"
                alt="article"
              />
              <div className="p-5">
                <span className="text-xs text-gray-500">News</span>
                <h4 className="text-lg font-semibold mt-2 mb-2">
                  Maximizing Efficiency in Operations
                </h4>
                <p className="text-sm text-gray-600">
                  Discover strategies to streamline your business processes and
                  enhance productivity.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">
          © 2026 Acelia. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

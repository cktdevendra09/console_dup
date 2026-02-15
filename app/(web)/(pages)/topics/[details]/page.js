export default function ArticleDetails() {
  return (
    <div className="bg-[#f7f7f7] text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Umda</h1>
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide text-gray-600">
            <a className="hover:text-black" href="#">Home</a>
            <a className="hover:text-black" href="#">Pages</a>
            <a className="hover:text-black" href="#">Portfolio</a>
            <a className="hover:text-black" href="#">Blog</a>
            <a className="hover:text-black" href="#">Shop</a>
            <a className="hover:text-black" href="#">Elements</a>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between text-sm text-gray-500">
          <span className="font-medium">Blog</span>
          <span>Home / Portfolio / Blog</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-16">
        {/* Article */}
        <article className="lg:col-span-2 bg-white p-10">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="article"
            className="mb-10 w-full object-cover"
          />

          <h2 className="text-4xl font-serif font-semibold mb-4">
            All the world’s waiting for you
          </h2>

          <p className="text-sm text-gray-500 mb-8">
            By <span className="font-medium">admin</span> · August 24, 2018 · Creative
          </p>

          <div className="space-y-6 text-[15px] leading-8">
            <p>
              Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
              lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis
              sem nibh id elit.
            </p>

            <p>
              Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor.
            </p>

            <blockquote className="border-l-4 border-black pl-6 italic text-gray-600 my-10">
              Class aptent taciti sociosqu ad litora torquent per conubia nostra,
              per inceptos himenaeos.
            </blockquote>

            <p>
              Sed non mauris vitae erat consequat auctor eu in elit. Class aptent
              taciti sociosqu ad litora torquent per conubia nostra.
            </p>
          </div>

          {/* Tags */}
          <div className="flex gap-3 mt-10">
            <span className="px-4 py-1 border text-xs tracking-wide">Creative</span>
            <span className="px-4 py-1 border text-xs tracking-wide">Design</span>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center border-t mt-14 pt-6 text-sm">
            <button className="border px-5 py-2 hover:bg-black hover:text-white transition">
              ← Previous Post
            </button>
            <button className="border px-5 py-2 hover:bg-black hover:text-white transition">
              Next Post →
            </button>
          </div>

          {/* Comments */}
          <section className="mt-16">
            <h3 className="text-2xl font-serif mb-6">Leave a comment</h3>
            <textarea
              className="w-full border p-4 mb-6 focus:outline-none"
              rows="5"
              placeholder="Your comment"
            />
            <div className="grid sm:grid-cols-3 gap-6 mb-6">
              <input className="border p-3" placeholder="Your name" />
              <input className="border p-3" placeholder="Your email" />
              <input className="border p-3" placeholder="Your website" />
            </div>
            <button className="border px-8 py-3 hover:bg-black hover:text-white transition">
              Submit
            </button>
          </section>
        </article>

        {/* Sidebar */}
        <aside className="space-y-14">
          <div className="bg-white p-8">
            <h4 className="font-serif text-lg mb-6">Categories</h4>
            <ul className="space-y-3 text-sm">
              {['Appetizers','Main Course','Desserts','Drinks','Coffees','Teas'].map(c => (
                <li key={c} className="flex justify-between border-b pb-2">
                  <span>{c}</span>
                  <span className="text-gray-400">→</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8">
            <input
              className="border w-full p-3"
              placeholder="Search..."
            />
          </div>

          <div className="bg-white p-8">
            <h4 className="font-serif text-lg mb-6">Top Posts</h4>
            <ol className="space-y-4 text-sm list-decimal list-inside">
              <li>Aenean mattis tortor ac sapien</li>
              <li>Vestibulum ante ipsum primis</li>
              <li>Sapien etiam eu odio posuere</li>
              <li>Etiam eu odio in sapien</li>
              <li>Morbi eget leo a tellus</li>
            </ol>
          </div>

          <div className="bg-white p-8">
            <h4 className="font-serif text-lg mb-6">Instagram</h4>
            <div className="grid grid-cols-3 gap-3">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="bg-gray-200 h-24" />
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-[#2f3440] text-gray-300 mt-24">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-12 text-sm">
          <div>
            <h5 className="text-white font-semibold mb-4">Umda.</h5>
            <p>© 2018 Energetic Themes</p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-4">Twitter Posts</h5>
            <p className="mb-2">Don’t forget to check out our latest updates.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>
            <h5 className="text-white font-semibold mb-4">Contact us</h5>
            <p>8425, 100 Down Street Avenue, NY</p>
            <p>Hello@codecanyon.com</p>
            <p>+08455-3534-202</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

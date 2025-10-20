// app/page.tsx
"use client";

export default function Page() {
  const posts = [
    {
      title: "My Amazing Journey to the Mountains",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reiciendis ad architecto at aut placeat quia...",
      img: "https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg",
      author: "Mohammed Ibrahim",
      date: "21 SEP 2015",
      avatar:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=731&q=80",
    },
    {
      title: "Exploring the Desert Safari",
      desc: "Autem, laborum. Dolore, ad voluptatem sit quibusdam dolorem pariatur suscipit sed fuga...",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      author: "Sara Khan",
      date: "15 AUG 2020",
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "City Lights & Nightlife",
      desc: "Veniam dolorem reiciendis molestias. Nisi, fuga accusamus nesciunt numquam veritatis eius error...",
      img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=800&q=80",
      author: "John Smith",
      date: "10 DEC 2019",
      avatar:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <main className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {posts.map((post, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg tracking-wide overflow-hidden"
          >
            <img
              src={post.img}
              alt={post.title}
              className="w-full h-52 object-cover"
            />

            <div className="px-4 py-4">
              <h2 className="font-bold text-2xl text-gray-800 mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-gray-700 mb-4">{post.desc}</p>

              <div className="flex items-center justify-between mb-3">
                <a href="#" className="text-blue-500 text-xs">
                  Show More
                </a>
                <span className="flex items-center gap-1 text-gray-700 text-sm">
                  <svg
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-blue-500"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 
                      012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  5
                </span>
              </div>

              <div className="flex items-center gap-3">
                <img
                  className="w-12 h-12 object-cover rounded-full shadow"
                  src={post.avatar}
                  alt={post.author}
                />
                <h2 className="text-sm text-gray-900">
                  <a href="#">{post.author}</a>{" "}
                  <span className="text-gray-600">· {post.date}</span>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

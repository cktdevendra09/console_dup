"use client";

export default function ProfileCardUI() {
  return (
    <div className="">
      
      <div className="max-w-xl w-full rounded-xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:shadow-primary/5 transition-all duration-300">
        
        {/* Cover Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDuRjv8471gXpvAAg8iF2dc_kdZIbVzLCShwRDHSAo9IRo9f3-mEUSVqTVsaX-fwLqiXvLeGY6M3TFMl62s5RInwK7e7DMUJjxBB7SY0gfJkdW43VnSbzL-XeTgN8efj3k3BaneaswBiOOaqHNJNh_m95KA_eB1lK32XhHJiRaSgVs6tYMfcIgFo18h84AQkyDwfyCxtiXTC69JKuXyjO1AgGvRltRF8fYepVeredMqxq1aM9vYEn5jqCOzXhJ1pcP12IMYKpragY"
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative px-8 pb-8 pt-1">

          {/* Avatar */}
          <div className="absolute -top-16 left-8">
            <div className="relative p-1 bg-background-dark rounded-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZf2lowSkBbGu-CNXwKZpywEJLnw7734JSBw8htyyYrEf13gtF8EERBois30Wlzuczw3rYTTmnTA8h5I8ma821T14hMhcAUYbdA-lthih5de73vmpmdkjw5VqtVxyFtQDjyd-JvMhTkUMlFQ4U-c7xRyNWYl_SD8lIKM7cQEQ0xeCk9bKVN8aEDqEIq0Ylj-rLxVoczDQ6_qUkGIxZjRRAWN-kdnaKxRow9hLJQ0EwhelAkhaUpzJL4_5OGHIbNsWr9kcja3ndjNo"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-background-dark object-cover shadow-lg"
              />
              <div className="absolute bottom-2 right-2 bg-primary w-6 h-6 rounded-full flex items-center justify-center border-2 border-background-dark">
                <span className="text-background-dark text-xs font-bold">
                  ✓
                </span>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="mt-20 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Alex Sterling
              </h1>
              <p className="text-primary font-medium mt-1">
                Senior Product Designer
              </p>
              <p className="text-slate-400 text-sm mt-1">
                📍 San Francisco, CA
              </p>
            </div>

            <div className="flex gap-2">
              <button className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 transition-colors">
                ✉️
              </button>
              <button className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 transition-colors">
                ⋯
              </button>
            </div>
          </div>

          {/* Bio */}
          <div className="mt-6">
            <p className="text-slate-300 leading-relaxed">
              Crafting immersive digital experiences with a focus on sustainable
              design systems and user-centric psychology. Currently leading the
              creative direction at Neosync.
            </p>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-8 py-4 border-y border-white/10">
            <Stat number="12.4k" label="Followers" />
            <Stat number="842" label="Following" />
            <Stat number="156" label="Projects" />
          </div>

          {/* CTA */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 rounded-full transition-all flex items-center justify-center gap-2">
              + Follow Profile
            </button>

            <button className="border border-slate-700 hover:bg-white/5 text-white font-bold py-4 rounded-full transition-all">
              View Portfolio
            </button>
          </div>

          {/* Skills */}
          <div className="mt-8 flex flex-wrap gap-2">
            {["Figma", "UX Strategy", "Design Systems", "Prototyping"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div className="flex flex-col">
      <span className="text-2xl font-bold text-white tracking-tight">
        {number}
      </span>
      <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">
        {label}
      </span>
    </div>
  );
}

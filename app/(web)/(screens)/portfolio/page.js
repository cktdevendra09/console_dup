export default function HireTalentPage() {
  return (
    <div className="bg-white text-black antialiased font-display min-h-screen">

      {/* ================= NAVBAR ================= */}
      {/* <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-black/5">
        <div className="max-w-[1600px] mx-auto px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <a className="text-2xl font-bold tracking-tighter uppercase">Archive.</a>

            <div className="hidden lg:flex space-x-8 text-[10px] font-sans uppercase tracking-[0.2em] font-medium text-black/50">
              <a className="hover:text-black transition-colors">Library</a>
              <a className="hover:text-black transition-colors">Manifesto</a>
              <a className="text-black font-bold">Hire Talent</a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-[10px] font-sans uppercase tracking-[0.2em] text-black/50 hover:text-black">
              Post a Role
            </button>
            <button className="border border-black px-6 py-2 text-[10px] font-sans uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </nav> */}

      {/* ================= MAIN ================= */}
      <main className="max-w-[1600px] mx-auto px-8 pt-16">

        {/* HEADER */}
        <header className="mb-16 border-b border-black/5 pb-16">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-black/40 block mb-6">
            Talent Directory
          </span>
          <h1 className="text-6xl font-bold tracking-tight mb-6">
            Premium Talent Index
          </h1>
          <p className="text-2xl font-light italic text-black/60 max-w-2xl leading-relaxed">
            A curated roster of world-class developers and designers for high-impact engineering teams.
          </p>
        </header>

        <div className="grid grid-cols-12 gap-12">

          {/* ================= FILTER SIDEBAR ================= */}
          <aside className="col-span-12 lg:col-span-2">
            <div className="sticky top-32 space-y-12">

              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-black/40 mb-6 block">
                  Skillset
                </span>
                <nav className="space-y-3 text-sm font-sans tracking-wide">
                  <a className="block font-bold text-black">All Specializations</a>
                  <a className="block text-black/60 hover:text-black">Frontend Engineering</a>
                  <a className="block text-black/60 hover:text-black">Systems Design</a>
                  <a className="block text-black/60 hover:text-black">Product Design</a>
                  <a className="block text-black/60 hover:text-black">Machine Learning</a>
                </nav>
              </div>

              <div>
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-black/40 mb-6 block">
                  Availability
                </span>
                <nav className="space-y-3 text-sm font-sans tracking-wide">
                  <a className="block text-black/60 hover:text-black">Available Now</a>
                  <a className="block text-black/60 hover:text-black">Next 30 Days</a>
                  <a className="block text-black/60 hover:text-black">Contract Only</a>
                </nav>
              </div>

            </div>
          </aside>

          {/* ================= TALENT GRID ================= */}
          <div className="col-span-12 lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/5 border border-black/5">

              {[
                {
                  name: "Adrian S. Thorne",
                  role: "Principal Systems Engineer",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdZHnENiXIatJRbyVSuxug-B2IxcUk6CqZqhutUCbt_zlU7fmHkt4_NFMUprY-Ild_k-xiMKXf3ZU9cmsPlmTWKzMctwUnS0O9JBpem6pgQLV0-6jtDLzywfFLB8v0WxIfXttNTrMeNkWl7j5mx5srSehF1N0KgG0P7xdmaIxi2UEL6GyN9-sU4in2wqhXS9iuG91E5kvGfQxUjT0Qe8v2czZEEeyHbbmpVp7HPBCmlNMXfmGiC21_gfUYomeJpELwlcVyRq7asPw"
                },
                {
                  name: "Elena Vance",
                  role: "Design Director",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA5790IlXVOtQ-8PYxIDA34eqQuPOXNP66pzeG8JO5zgXzuq-tTz-E1VwdP-JermU4ORgwNNMVz52KoQZhh4tBmcaU5cWOvbr8oI5Un5fg-zhKtzi6_zSZMwuagHckeIk3W1wLACTZeFLVsGGQgidkzmc9xZO1OAxeGZl1SDl-AM4JCU66_2rS6QyIxYIuypLtTxTMRlihwmIRwOLfUGQJzcXpVv6gmHVbuRAPNoPecd9uo78_EUeeuFbcI000ID0WcvsekdixGn4"
                },
                {
                  name: "Marcus J. Chen",
                  role: "Full Stack Architect",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBfr3ops6lF_1pPb3C76OhudFXnGXonJPY0ujsr1NnnvNpNwoHMm4Jctq9OzIdr85h476XJkLoptQI04rJxIVsb9k11DIVeXeIsHpa3WBEo7o92jPcgq2k0pbs6UITisDncGV149AO-89goV27FvTLTNLEIbAe7gNEii2o8jjDxmuSgDwytJ9q2x9DHFCY1An1hzrbdZvInXV_gsIH6ufjnEhhrgymJZHuldNdTGfmf2A-gSURhzXCehiMNLtga_05K_gJlxg5-1v0"
                },
                {
                  name: "Sarah K. Miller",
                  role: "UX Research Lead",
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvN8V-QYNFnqvqnXnZESyeohFx1XnGKVO42dl3A0oVGMEdshjFjX-3GNOngSvhQSh7uz3ok02CQDWC6-Sq-stWzFjQ37KrbIr1OIs289RvzfP-OhqNHTR6zd8TOLR0qajpnkcV_OpFO6ndZ6Ep69y6Ikk5n6N5JY8tzWF7YWpUFhAP2JJlGJqgUcXYX32wR29d7ADSbh71X-JNHsjD76iZjB_4AK9t8hdSC4GaPo0yEJFpI55GZzPgGgN0PyBWHyGzsqPr1Ae_mm0"
                }
              ].map((person, index) => (
                <div key={index} className="border border-black/5 p-8 flex flex-col bg-white hover:border-black/20 transition-all">

                  <div className="aspect-square mb-8 bg-gray-100 overflow-hidden grayscale">
                    <img
                      src={person.img}
                      alt={person.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold tracking-tight mb-1">
                      {person.name}
                    </h3>
                    <p className="text-xs font-sans uppercase tracking-widest text-black/40">
                      {person.role}
                    </p>
                  </div>

                  <button className="mt-auto w-full bg-black text-white py-4 text-[10px] font-sans uppercase tracking-[0.3em] font-bold hover:bg-black/80 transition-all">
                    Hire Now
                  </button>

                </div>
              ))}

            </div>
          </div>

        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black text-white pt-24 pb-12 mt-32">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="pt-8 border-t border-white/10 flex justify-between items-center text-[10px] font-sans text-white/30 uppercase tracking-[0.3em]">
            <p>© 2024 Archive Talent Directory. All Rights Reserved.</p>
            <p>Curated for Quality.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}

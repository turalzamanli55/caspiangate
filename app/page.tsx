export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 z-50 glass border-b border-white/10">
        <h1 className="text-lg font-semibold tracking-wide">
          Caspian Gate
        </h1>

        <div className="space-x-8 text-sm text-gray-300">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Products</a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"></div>

        {/* GLOW */}
        <div className="absolute w-[700px] h-[700px] glow blur-3xl opacity-40"></div>

        <div className="relative z-10 animate-fadeUp px-6">

          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Caspian Gate
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto">
            Premium poultry production in Azerbaijan & Iraq
          </p>

          <button className="mt-10 px-10 py-4 rounded-full bg-white text-black font-medium hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition">
            Contact Us
          </button>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-16">Products</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            { img: "/chicken1.jpg", title: "Fresh Chicken" },
            { img: "/chicken2.jpg", title: "Frozen Products" },
            { img: "/chicken3.jpg", title: "Bulk Supply" },
          ].map((item, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-2xl glass border border-white/10 hover:scale-[1.02] transition duration-500"
            >

              <img
                src={item.img}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="p-6 text-left">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-gray-400">
                  High-quality poultry products
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-32 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6">About</h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          Caspian Gate is a modern poultry production company delivering
          high standards, innovation, and reliability across Azerbaijan and Iraq.
        </p>
      </section>

      {/* MAP */}
      <section className="py-32 text-center">
        <h2 className="text-4xl font-semibold mb-8">Our Locations</h2>

        <div className="flex justify-center">
          <iframe
            src="https://maps.google.com/maps?q=Azerbaijan&t=&z=5&ie=UTF8&iwloc=&output=embed"
            className="w-full max-w-4xl h-96 rounded-2xl border border-white/10"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-8">Contact Us</h2>

        <form className="max-w-xl mx-auto space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 glass border border-white/10 rounded-xl outline-none focus:border-white/30"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 glass border border-white/10 rounded-xl outline-none focus:border-white/30"
          />

          <textarea
            placeholder="Message"
            className="w-full p-4 glass border border-white/10 rounded-xl outline-none focus:border-white/30"
          />

          <button className="w-full py-4 bg-white text-black rounded-xl font-semibold hover:scale-[1.02] transition">
            Send Message
          </button>

        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-500 text-sm border-t border-white/10">
        ©️ 2026 Caspian Gate. All rights reserved.
      </footer>

    </main>
  );
}
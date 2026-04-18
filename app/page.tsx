export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
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
      {/* HERO */}
<section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

  {/* GRADIENT BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black"></div>

  {/* LIGHT EFFECT */}
  <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[120px] rounded-full top-1/4 left-1/2 -translate-x-1/2"></div>

  {/* CONTENT */}
  <div className="relative z-10 animate-fade px-6">
    <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
      Caspian Gate
    </h1>

    <p className="mt-6 text-gray-400 text-lg">
      Premium poultry production in Azerbaijan & Iraq
    </p>

    <button className="mt-8 px-8 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition">
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
              className="group overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:shadow-[0_20px_60px_rgba(255,255,255,0.1)] transition"
            >

              <img
                src={item.img}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
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
            className="w-full max-w-4xl h-96 rounded-2xl border border-gray-800"
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
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-lg"
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-lg"
          />

          <button className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:scale-[1.02] transition">
            Send Message
          </button>

        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-500 text-sm">
        © 2026 Caspian Gate. All rights reserved.
      </footer>

    </main>
  );
}
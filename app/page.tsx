export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 glass z-50">
        <h1 className="text-lg font-semibold tracking-wide">
          Caspian Gate
        </h1>

        <div className="space-x-8 text-sm text-gray-300">
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        <video autoPlay muted loop playsInline
          className="absolute w-full h-full object-cover opacity-40">
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10">
          <h1 className="text-6xl font-semibold tracking-tight">
            Caspian Gate
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Premium poultry production in Azerbaijan & Iraq
          </p>

          <button className="mt-8 px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-16">Products</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            { img: "/chicken1.jpg", title: "Fresh Chicken" },
            { img: "/chicken2.jpg", title: "Frozen Products" },
            { img: "/chicken3.jpg", title: "Bulk Supply" },
          ].map((item, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl">

              <img
                src={item.img}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

              <div className="mt-4 text-left">
                <h3 className="text-xl font-medium">{item.title}</h3>
                <p className="text-gray-400">
                  High-quality poultry products
                </p>
              </div>

            </div>
          ))}

        </div>
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

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-semibold mb-6">About</h2>

        <p className="text-gray-400 text-lg">
          Caspian Gate is a modern poultry production company delivering high standards,
          innovation, and reliability in Azerbaijan and Iraq markets.
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-8">Contact Us</h2>

        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Your Name"
            className="w-full p-3 bg-black border border-gray-700 rounded-lg" />

          <input type="email" placeholder="Your Email"
            className="w-full p-3 bg-black border border-gray-700 rounded-lg" />

          <textarea placeholder="Message"
            className="w-full p-3 bg-black border border-gray-700 rounded-lg" />

          <button className="w-full py-3 bg-white text-black rounded-lg font-semibold hover:scale-105 transition">
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
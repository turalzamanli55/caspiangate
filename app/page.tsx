"use client";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 z-50 glass">
        <h1 className="text-lg font-semibold">Caspian Gate</h1>

        <div className="space-x-8 text-sm text-gray-300">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center">

        <div className="hero-light"></div>

        <div className="fade-up z-10 px-6">
          <h1 className="text-7xl font-semibold text-gradient">
            Caspian Gate
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            Premium poultry production in Azerbaijan & Iraq
          </p>

          <button className="mt-10 px-10 py-4 rounded-full bg-white text-black">
            Contact Us
          </button>
        </div>

      </section>

      {/* PRODUCTS */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl mb-16">Products</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            { img: "/chicken1.jpg", title: "Fresh Chicken" },
            { img: "/chicken2.jpg", title: "Frozen Products" },
            { img: "/chicken3.jpg", title: "Bulk Supply" },
          ].map((item, i) => (
            <div key={i} className="card reveal rounded-2xl overflow-hidden">

              <img src={item.img} className="w-full h-80 object-cover" />

              <div className="p-6 text-left">
                <h3 className="text-xl">{item.title}</h3>
                <p className="text-gray-400">
                  High-quality poultry products
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-32 px-6 text-center max-w-3xl mx-auto reveal">
        <h2 className="text-4xl mb-6">About</h2>
        <p className="text-gray-400 text-lg">
          Caspian Gate is a modern poultry company delivering innovation and reliability.
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-32 px-6 text-center">
        <h2 className="text-4xl mb-8">Contact</h2>

        <form className="max-w-xl mx-auto space-y-4 reveal">

          <input placeholder="Name" className="w-full p-4 glass rounded-xl" />
          <input placeholder="Email" className="w-full p-4 glass rounded-xl" />
          <textarea placeholder="Message" className="w-full p-4 glass rounded-xl" />

          <button className="w-full py-4 bg-white text-black rounded-xl">
            Send Message
          </button>

        </form>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-500 border-t border-white/10">
        © Caspian Gate
      </footer>

    </main>
  );
}
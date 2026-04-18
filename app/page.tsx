"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const reveals = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
          el.classList.add("active");
        }
      });
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 md:px-10 py-5 backdrop-blur-2xl bg-black/40 border-b border-white/10">

        <h1 className="text-lg md:text-xl font-semibold tracking-wider">
          Caspian Gate
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-sm text-gray-400">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-black z-40 flex flex-col items-center justify-center gap-8 text-xl">
          <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black" />

        {/* MOUSE LIGHT */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            left: pos.x - 350,
            top: pos.y - 350,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%)",
            filter: "blur(120px)",
          }}
        />

        {/* CENTER GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-white/10 blur-[140px] rounded-full top-1/3 left-1/2 -translate-x-1/2" />

        <div className="relative z-10 px-6 animate-fade">

          <h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-gradient">
            Caspian Gate
          </h1>

          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
            Premium poultry production in Azerbaijan & Iraq
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <a href="#contact">
              <button className="px-10 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition">
                Contact Us
              </button>
            </a>

            <a href="#products">
              <button className="px-10 py-4 border border-white/20 rounded-full hover:bg-white/10 transition">
                Explore
              </button>
            </a>

          </div>

        </div>

      </section>

      {/* PRODUCTS */}
      <section id="products" className="py-40 px-6 text-center relative">

        <h2 className="text-5xl font-semibold mb-20 text-gradient reveal">
          Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl reveal">
            <img src="/chicken1.jpg" className="w-full h-[500px] object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-0 p-10 text-left">
              <h3 className="text-3xl font-semibold">Fresh Chicken</h3>
              <p className="text-gray-300 mt-2">Premium quality poultry</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {[
              { img: "/chicken2.jpg", title: "Frozen Products" },
              { img: "/chicken3.jpg", title: "Bulk Supply" },
            ].map((item, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl reveal">
                <img src={item.img} className="w-full h-[240px] object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 p-6 text-left">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32 px-6 text-center max-w-3xl mx-auto reveal">
        <h2 className="text-4xl font-semibold mb-6">About</h2>
        <p className="text-gray-400 text-lg">
          Caspian Gate is a modern poultry production company delivering high standards.
        </p>
      </section>

      {/* MAP */}
      <section className="py-32 text-center reveal">
        <h2 className="text-4xl font-semibold mb-8">Our Location</h2>

        <div className="flex justify-center">
          <iframe
            src="https://maps.google.com/maps?q=Sulav%20slaughterhouse%20storage%20Duhok%20Iraq&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full max-w-4xl h-96 rounded-2xl border border-gray-800"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 text-center">
        <h2 className="text-4xl font-semibold mb-8 reveal">Contact Us</h2>

        <form
  onSubmit={async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("✅ Message sent successfully!");
      form.reset();
    } else {
      alert("❌ Error sending message");
    }
  }}
  className="max-w-xl mx-auto space-y-4 reveal"
>

  <input
    name="name"
    type="text"
    placeholder="Your Name"
    required
    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg focus:border-white/30 outline-none"
  />

  <input
    name="email"
    type="email"
    placeholder="Your Email"
    required
    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg focus:border-white/30 outline-none"
  />

  <textarea
    name="message"
    placeholder="Message"
    required
    rows={5}
    className="w-full p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-lg focus:border-white/30 outline-none"
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
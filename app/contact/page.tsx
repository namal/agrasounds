"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    // Explicitly type currentTarget as HTMLFormElement
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        form.reset(); // ✅ Works now
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <Image
          src="/img/hero_contact.png"
          alt="Contact Us"
          fill
          priority
          className="object-cover "
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Get in Touch</h1>
          <p className="text-zinc-200 mx-auto text-3xl">
            Have a question or a project in mind? We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="bg-white w-full py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left FORM */}
            <div className="bg-white border border-zinc-200 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-zinc-900">
                Send us a message
              </h3>

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-1 text-zinc-700">
                    Name
                  </label>
                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-lg border px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-zinc-700">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="w-full rounded-lg border px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-zinc-700">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    placeholder="+971 XX XXX XXXX"
                    className="w-full rounded-lg border px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-zinc-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full rounded-lg border px-4 py-2"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-zinc-800 transition font-medium"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Right CONTENT */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/img/side_contact.png"
                  alt="Contact Information"
                  width={500}
                  height={400}
                  className="mb-6 rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
                />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-zinc-900 relative inline-block">
                Let’s talk about your event
                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-amber-500 rounded-full"></span>
              </h2>

              <p className="text-zinc-600 mb-6 text-lg">
                Whether it’s sound, lighting, or full event production, Agra
                Sounds is ready to support your next event in Dubai.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

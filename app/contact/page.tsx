"use client";
import { useState } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...form, captchaToken }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
      setCaptchaToken(null);
    } else {
      alert("Captcha verification failed.");
    }
  };

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
        Overlay
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
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-zinc-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-zinc-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+971 XX XXX XXXX"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-zinc-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    required
                  />
                </div>
                <div className="flex justify-center">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                    onChange={(token) => setCaptchaToken(token)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white py-3 rounded-lg"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
            {/* Right CONTENT (optional info / image later) */}
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
                {"Let’s talk about your event"}
                <span className="absolute left-0 -bottom-2 w-16 h-1 bg-amber-500 rounded-full"></span>
              </h2>

              <p className="text-zinc-600 mb-6 text-lg">
                {
                  "Whether it’s sound, lighting, or full event production, Agra Sounds is ready to support your next event in Dubai."
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

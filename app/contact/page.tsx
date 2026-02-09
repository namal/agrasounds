import Image from "next/image"

export default function ContactPage() {
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

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

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

              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1 text-zinc-700">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-zinc-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-zinc-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+971 XX XXX XXXX"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-zinc-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your event..."
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-zinc-800 transition font-medium"
                >
                  Send Message
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
                  className="mb-6 rounded-lg shadow-lg"
                />
              </div>

              <h2 className="text-3xl font-bold mb-4 text-zinc-900">
                Let’s talk about your event
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
  )
}

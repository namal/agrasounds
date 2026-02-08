"use client";

import { useState } from "react";

export default function RentingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // later you can connect this to an API route
      console.log("Submitted Data:", formData);

      // reset form
      setFormData({ name: "", email: "", phone: "", eventDate: "" });
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-150 min-w-full bg-gradient-to-b from-zinc-600 to-blue-900 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4">Renting Request</h2>

        <label htmlFor="name" className="block mb-1 font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />

        <label htmlFor="phone" className="block mb-1 font-medium">
          Phone Number
        </label>
        <input
          id="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full mb-6 p-2 border border-gray-300 rounded"
        />
        <label htmlFor="eventDate" className="block mb-1 font-medium">
            Event Date
        </label>
        <input
          id="eventDate"
          type="text"
          value={formData.eventDate}
          onChange={handleChange}
          required
          className="w-full mb-6 p-2 border border-gray-300 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-zinc-800 transition"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
        <button
          type="button"
          disabled={loading}
          className="w-full bg-black text-white py-2 rounded hover:bg-zinc-800 transition mt-4"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

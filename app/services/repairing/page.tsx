"use client";

import { useState } from "react";

export default function RepairingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    equipmentType: "",
    brand: "",
    model: "",
    issueDescription: "",
 
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Repair Request:", formData);

      setFormData({
        name: "",
        email: "",
        phone: "",
        equipmentType: "",
        brand: "",
        model: "",
        issueDescription: "",
      });

      alert("Repair request submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-150 min-w-full bg-gradient-to-b from-zinc-600 to-amber-900 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-xl font-semibold mb-4">Repair Request</h2>

        {/* Name */}
        <label htmlFor="name" className="block mb-1 font-medium">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Email */}
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Phone */}
        <label htmlFor="phone" className="block mb-1 font-medium">
          Phone
        </label>
        <input
          id="phone"
          type="text"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Equipment Type */}
        <label htmlFor="equipmentType" className="block mb-1 font-medium">
          Equipment Type
        </label>
        <input
          id="equipmentType"
          type="text"
          placeholder="Speaker / Mixer / Amplifier"
          value={formData.equipmentType}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Brand */}
        <label htmlFor="brand" className="block mb-1 font-medium">
          Brand
        </label>
        <input
          id="brand"
          type="text"
          value={formData.brand}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Model */}
        <label htmlFor="model" className="block mb-1 font-medium">
          Model
        </label>
        <input
          id="model"
          type="text"
          value={formData.model}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded"
        />

        {/* Issue Description */}
        <label htmlFor="issueDescription" className="block mb-1 font-medium">
          Issue Description
        </label>
        <textarea
          id="issueDescription"
          value={formData.issueDescription}
          onChange={handleChange}
          required
          className="w-full mb-4 p-2 border rounded"
          rows={3}
        />

        

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

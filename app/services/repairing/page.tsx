"use client";

import { useState } from "react";

interface RepairFormData {
  name: string;
  email: string;
  phone: string;
  equipmentType: string;
  brand: string;
  model: string;
  issueDescription: string;
}

export default function RepairingPage() {
  const [formData, setFormData] = useState<RepairFormData>({
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
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Repair Request:", formData);

      // Reset form
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
    <div className="  flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold text-center text-zinc-800 mb-6">
          Equipment Repair Request
        </h2>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1 font-medium">
              Phone Number
            </label>
            <input
              id="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="block mb-1 font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        {/* Equipment Info */}
        <div className="mt-6">
          <label htmlFor="equipmentType" className="block mb-1 font-medium">
            Equipment Type
          </label>
          <input
            id="equipmentType"
            type="text"
            placeholder="Speaker / Mixer / Amplifier / Subwoofer"
            value={formData.equipmentType}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        {/* Brand + Model */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="brand" className="block mb-1 font-medium">
              Brand
            </label>
            <input
              id="brand"
              type="text"
              value={formData.brand}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="model" className="block mb-1 font-medium">
              Model
            </label>
            <input
              id="model"
              type="text"
              value={formData.model}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>
        </div>

        {/* Issue Description */}
        <div className="mt-6">
          <label htmlFor="issueDescription" className="block mb-1 font-medium">
            Issue Description
          </label>
          <textarea
            id="issueDescription"
            rows={4}
            value={formData.issueDescription}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-amber-500 outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-amber-600 text-white py-3 rounded-lg font-semibold hover:bg-amber-700 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Repair Request"}
        </button>
      </form>
    </div>
  );
}

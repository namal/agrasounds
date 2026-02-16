"use client";

import { useState, useEffect } from "react";

interface RentingFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: string;
  startTime: string;
  endTime: string;
  location: string;
  headCount: string;
}

export default function RentingPage() {
  const [formData, setFormData] = useState<RentingFormData>({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    startTime: "",
    endTime: "",
    location: "",
    headCount: "",
  });

  const [loading, setLoading] = useState(false);
  const [duration, setDuration] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // ✅ Auto Calculate Duration
  useEffect(() => {
    if (formData.startTime && formData.endTime) {
      const start = new Date(`1970-01-01T${formData.startTime}`);
      const end = new Date(`1970-01-01T${formData.endTime}`);

      const diff = (end.getTime() - start.getTime()) / (1000 * 60); // minutes

      if (diff > 0) {
        const hours = Math.floor(diff / 60);
        const minutes = diff % 60;
        setDuration(`${hours}h ${minutes}m`);
      } else {
        setDuration("Invalid time range");
      }
    } else {
      setDuration("");
    }
  }, [formData.startTime, formData.endTime]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Renting Request:", formData);
      alert("Renting request submitted successfully!");

      handleReset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      startTime: "",
      endTime: "",
      location: "",
      headCount: "",
    });
    setDuration("");
  };

  return (
    <div className="flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-2xl space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-zinc-800 mb-6">
          Renting Request
        </h2>

        {/* Name + Phone */}
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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
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
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Email */}
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
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Event Date */}
        <div className="mt-4">
          <label htmlFor="eventDate" className="block mb-1 font-medium">
            Event Date
          </label>
          <input
            id="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Start & End Time */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="startTime" className="block mb-1 font-medium">
              Start Time
            </label>
            <input
              id="startTime"
              type="time"
              value={formData.startTime}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="endTime" className="block mb-1 font-medium">
              End Time
            </label>
            <input
              id="endTime"
              type="time"
              value={formData.endTime}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Duration */}
        {duration && (
          <div className="text-sm text-blue-600 font-medium mt-2">
            Estimated Duration: {duration}
          </div>
        )}

        {/* Location + Head Count */}
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label htmlFor="location" className="block mb-1 font-medium">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label htmlFor="headCount" className="block mb-1 font-medium">
              Head Count
            </label>
            <input
              id="headCount"
              type="number"
              value={formData.headCount}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Renting Request"}
        </button>
      </form>
    </div>
  );
}

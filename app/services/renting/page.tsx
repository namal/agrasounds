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
      console.log("Submitted Data:", formData);
      alert("Form submitted successfully!");

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
    <div className="w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-semibold text-center">
          Renting Request
        </h2>

        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className="block text-sm font-medium">
            Event Date
          </label>
          <input
            id="eventDate"
            type="date"
            value={formData.eventDate}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Start & End Time - Same Row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="startTime" className="block text-sm font-medium">
              Start Time
            </label>
            <input
              id="startTime"
              type="time"
              value={formData.startTime}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </div>

          <div>
            <label htmlFor="endTime" className="block text-sm font-medium">
              End Time
            </label>
            <input
              id="endTime"
              type="time"
              value={formData.endTime}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded mt-1"
            />
          </div>
        </div>

        {/* Duration Display */}
        {duration && (
          <div className="text-sm text-blue-600 font-medium">
            Estimated Duration: {duration}
          </div>
        )}

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium">
            Location
          </label>
          <input
            id="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Head Count */}
        <div>
          <label htmlFor="headCount" className="block text-sm font-medium">
            Head Count
          </label>
          <input
            id="headCount"
            type="number"
            value={formData.headCount}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-black text-white py-2 rounded hover:bg-zinc-800 transition"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="flex-1 bg-gray-200 py-2 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

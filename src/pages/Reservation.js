// src/pages/Reservation.js
import React from 'react';

const Reservation = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation submitted!');
  };

  return (
    <div className="min-h-screen bg-[#FFFDF9] flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#FAF7F2] p-8 rounded-xl shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-[#4B3E2F] text-center mb-4">
          Reserve Your Table
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          required
        />
        <input
          type="date"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          required
        />
        <input
          type="time"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          required
        />
        <input
          type="number"
          min="1"
          max="20"
          placeholder="Guests"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
          required
        />

        <button
          type="submit"
          className="w-full bg-[#FFB84C] text-white p-3 rounded-md font-semibold hover:bg-[#ffa533]"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
};

export default Reservation;
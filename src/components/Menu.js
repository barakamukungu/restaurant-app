import React from "react";
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-3xl font-bold">Carol’s Diner</h1>
        <p className="text-gray-400">Experience the best gourmet meals.</p>
        <button
          onClick={() => navigate('/reservation')}
          className="bg-[#FFB84C] text-white px-4 py-2 rounded-md hover:bg-[#ffa533]"
        >
          Book a Reservation
        </button>
      </section>

      {/* Dish List */}
    </div>
  );
};

export default Menu;
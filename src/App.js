import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from "./components/Menu";
import Navbar from './components/Navbar';
import Reservation from './pages/Reservation';
import FoodCard from './components/FoodCard';
import Footer from './components/Footer';

const dishes = [
  {
    image: '/images/restaurant1.png',
    name: 'Creamy Alfredo Pasta',
    rating: 4,
    price: 14.5,
  },
  {
    image: '/images/restaurant2.png',
    name: 'Classic Beef Burger',
    rating: 5,
    price: 21.23,
  },
  {
    image: '/images/restaurant3.png',
    name: 'Margherita Pizza',
    rating: 4,
    price: 30.5,
  },
  {
    image: '/images/restaurant4.png',
    name: 'Salmon Sushi Platter',
    rating: 5,
    price: 18.99,
  },
  {
    image: '/images/restaurant5.png',
    name: 'Grilled Ribeye Steak',
    rating: 5,
    price: 22.0,
  },
  {
    image: '/images/restaurant6.png',
    name: 'Garden Fresh Salad',
    rating: 3,
    price: 15.25,
  },
  {
    image: '/images/restaurant7.png',
    name: 'Chicken Katsu Curry',
    rating: 4.8,
    price: 14,
  },
  {
    image: '/images/restaurant8.png',
    name: 'Falafel Wrap (Vegan)',
    rating: 4.5,
    price: 9,
  },
  {
    image: '/images/restaurant9.png',
    name: 'Butter Chicken',
    rating: 4.9,
    price: 13.50,
  },
  {
    image: '/images/restaurant10.png',
    name: 'Shrimp Tempura Udon',
    rating: 4.6,
    price: 15,
  },
  {
    image: '/images/restaurant11 .png',
    name: 'Chicken Caesar Salad',
    rating: 4.5,
    price: 14,
  },
  {
    image: '/images/restaurant12.png',
    name: 'Shrimp Alfredo Pasta',
    rating: 4.8,
    price: 19,
  },
  {
    image: '/images/restaurant13.png',
    name: 'Vegan Buddha Bowl',
    rating: 4.6,
    price: 16,
  },
  {
    image: '/images/restaurant.14',
    name: 'Lamb Chops with Mint Sauce',
    rating: 4.9,
    price: 26,
  },
  {
    image: '/images/restaurant15.png',
    name: 'Grilled Salmon with Asparagus',
    rating: 4.7,
    price: 22,
  },
];

function App() {
  return (
    <div>
      <Router>       
        <Navbar />
        <Menu />      
        <Routes>
          <Route
            path="/"
            element={
              <div className="min-h-screen bg-[#FFFDF9] px-4 py-8">
                <h1 className="text-2xl font-bold text-[#4B3E2F] mb-6 text-center">
                  🍽️ Our Menu
                </h1>
                
                <FoodCard dishes={dishes} />
              </div>
            }
          />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
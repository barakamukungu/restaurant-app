import React from 'react';

const dishes = [
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant1.png`,
    name: 'Creamy Alfredo Pasta',
    rating: 4,
    price: 14.5,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant2.png`,
    name: 'Classic Beef Burger',
    rating: 5,
    price: 21.23,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant3.png`,
    name: 'Margherita Pizza',
    rating: 4,
    price: 30.5,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant4.png`,
    name: 'Salmon Sushi Platter',
    rating: 5,
    price: 18.99,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant5.png`,
    name: 'Grilled Ribeye Steak',
    rating: 5,
    price: 22.0,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant6.png`,
    name: 'Garden Fresh Salad',
    rating: 3,
    price: 15.25,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant7.png`,
    name: 'Chicken Katsu Curry',
    rating: 4.8,
    price: 14,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant8.png`,
    name: 'Falafel Wrap (Vegan)',
    rating: 4.5,
    price: 9,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant9.png`,
    name: 'Butter Chicken',
    rating: 4.9,
    price: 13.5,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant10.png`,
    name: 'Shrimp Tempura Udon',
    rating: 4.6,
    price: 15,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant11 .png`,
    name: 'Chicken Caesar Salad',
    rating: 4.5,
    price: 14,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant12.png`,
    name: 'Shrimp Alfredo Pasta',
    rating: 4.8,
    price: 19,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant13.png`,
    name: 'Vegan Buddha Bowl',
    rating: 4.6,
    price: 16,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant14.png`,
    name: 'Lamb Chops with Mint Sauce',
    rating: 4.9,
    price: 26,
  },
  {
    image: `${process.env.PUBLIC_URL}/images/restaurant15.png`,
    name: 'Grilled Salmon with Asparagus',
    rating: 4.7,
    price: 22,
  },
];

const FoodCard = () => {
  return (
    <div className="bg-gray-900 py-10 px-4">
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{dish.name}</h3>
              <div className="flex items-center mb-2">
                {'★'.repeat(Math.floor(dish.rating))}
                <span className="ml-2 text-gray-400 text-sm">
                  ({dish.rating})
                </span>
              </div>
              <p className="text-xl font-bold">${dish.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCard;
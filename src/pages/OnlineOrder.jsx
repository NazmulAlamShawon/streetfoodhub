import React, { useState } from "react";

const foodIngredientsData = {
  foodIngredients: [
    {
      id: 1,
      name: "Flour",
      category: "Dry Goods",
      quantity: "500g",
    },
    {
      id: 2,
      name: "Tomatoes",
      category: "Vegetables",
      quantity: "1 kg",
    },
    {
      id: 3,
      name: "Chicken Breast",
      category: "Meat",
      quantity: "300g",
    },
    {
      id: 4,
      name: "Olive Oil",
      category: "Condiments",
      quantity: "250ml",
    },
    {
      id: 5,
      name: "Onions",
      category: "Vegetables",
      quantity: "250g",
    },
    {
      id: 6,
      name: "Garlic",
      category: "Herbs and Spices",
      quantity: "50g",
    },
  ],
};

const OnlineOrder = ({ count }) => {
  const { foodIngredients } = foodIngredientsData;

  const handleButtonClick = () => {
    // Handle the button click event here
  };

  return (
    <div className="flex justify-around p-8">
      {/* Food Ingredients Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Food Ingredients</h2>
        <ul className="list-disc"></ul>
      </div>

      {/* Order Count Section */}
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">Order Count</h2>

      
      </div>
    </div>
  );
};

export default OnlineOrder;

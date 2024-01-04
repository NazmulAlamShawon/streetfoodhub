import React from "react";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="flex flex-col items-start justify-start h-screen bg-primary  ">
      <h1 className="text-3xl font-bold mb-8">Choose an Option</h1>
      <div className="flex gap-4 flex-col ml-4">
        {/* Online Order Button */}
        <Link to="/online-order">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 focus:outline-none">
            Online Order
          </button>
        </Link>

        {/* Table Reservation Button */}
        <Link to="/table-reservation">
          <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none">
            Table Reservation
          </button>
        </Link>

        {/* Food Order Button */}
        <Link to="/food-order">
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600 focus:outline-none">
            Food Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Order;

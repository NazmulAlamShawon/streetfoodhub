import React, { useState, useEffect } from "react";

const TopRated = () => {
  const [topRatedItems, setTopRatedItems] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a fake API
    const fetchData = async () => {
      try {
        // You can replace this with an actual API endpoint
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();

        // For simplicity, use the first 3 items as top-rated
        const topRatedData = data.slice(0, 3);

        setTopRatedItems(topRatedData);
      } catch (error) {
        console.error("Error fetching top-rated items:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" p-5 mx-auto p-4 bg-secondaryclr mt-3 text-white">
      <h2 className="text-2xl font-bold mb-4 text-white">Top Rated</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {topRatedItems.map((item) => (
          <div key={item.id} className="border p-4">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;

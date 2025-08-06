import React from "react";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import img1 from "../assets/image (2).png";
import img2 from "../assets/image (3).png";
import img3 from "../assets/image (4).png";

const cards = [
  {
    image: img1,
    title: "Green Safari",
    location: "Green Mountain",
    rating: 4.8,
  },
  {
    image: img2,
    title: "Night camping",
    location: "Lightning lake",
    rating: 4.8,
  },
  {
    image: img3,
    title: "Mount climbing",
    location: "Green Mountain",
    rating: 4.8,
  },
];

function DashboardCard() {
  return (
    <div className="flex gap-6">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="relative rounded-2xl overflow-hidden shadow-lg w-64 h-72 bg-gray-200"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          {/* Card content */}
          <div className="absolute bottom-0 left-0 w-full p-5">
            <div className="text-white font-semibold text-lg drop-shadow mb-1">
              {card.title}
            </div>
            <div className="flex items-center gap-2 text-white text-xs drop-shadow">
              <FaMapMarkerAlt className="text-white" />
              <span>{card.location}</span>
              <FaStar className="ml-2 text-yellow-400" />
              <span>{card.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCard;

import React from "react";
import { FaStar, FaMapMarkerAlt, FaFilter } from "react-icons/fa";
import greenwood from "../assets/dist1.png";
import greenforest from "../assets/dist2.png";
import desert from "../assets/dist3.png";

const destinations = [
  {
    img: greenwood,
    title: "Green wood forest",
    location: "Telangana",
    rating: 4.8,
    price: 999,
  },
  {
    img: greenforest,
    title: "Green forest Camp",
    location: "Channai",
    rating: 4.8,
    price: 999,
  },
  {
    img: desert,
    title: "Desert Festival",
    location: "Gujarat",
    rating: 4.8,
    price: 999,
  },
];

function DestinationList() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow mt-8">
      <div className="flex items-center justify-between mb-3">
        <div>
          <span className="font-semibold text-lg">
            Best Destination <span className="ml-1">🌈</span>
          </span>
          <div className="text-gray-400 text-xs">100 Destination found</div>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-500 text-sm font-medium hover:bg-gray-50 shadow-sm">
          <FaFilter />
          Filters
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {destinations.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between py-2">
            <div className="flex items-center gap-3">
              <img
                src={item.img}
                alt={item.title}
                className="w-14 h-14 rounded-xl object-cover"
              />
              <div>
                <div className="font-semibold text-gray-700">{item.title}</div>
                <div className="flex items-center text-gray-400 text-xs gap-1">
                  <FaMapMarkerAlt />
                  <span>{item.location}</span>
                  <FaStar className="ml-2 text-yellow-400" />
                  <span>{item.rating}</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-gray-700">
                ₹{item.price}
                <span className="text-xs font-normal text-gray-400">
                  /night
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DestinationList;

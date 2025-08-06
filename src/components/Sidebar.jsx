import React, { useState } from "react";
import {
  FaHome,
  FaTicketAlt,
  FaStar,
  FaEnvelope,
  FaMoneyCheckAlt,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: <FaHome /> },
  { name: "Ticket", icon: <FaTicketAlt /> },
  { name: "Favorite", icon: <FaStar /> },
  { name: "Message", icon: <FaEnvelope /> },
  { name: "Transaction", icon: <FaMoneyCheckAlt /> },
  { name: "Setting", icon: <FaCog /> },
];

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <aside className="w-72 min-h-screen bg-white flex flex-col py-8 px-7 rounded-l-3xl shadow-xl">
      {/* Logo */}
      <h1 className="text-2xl font-bold mb-12">Travelingo</h1>

      {/* Navigation */}
      <nav className="flex flex-col gap-6 mb-8">
        {menuItems.map((item) => (
          <button
            key={item.name}
            onClick={() => setActiveItem(item.name)}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl text-base font-medium transition-all duration-200
              ${
                activeItem === item.name
                  ? "bg-green-500 text-white shadow-lg font-semibold"
                  : "text-gray-400 hover:bg-gray-100"
              }`}
            style={
              activeItem === item.name
                ? { boxShadow: "0 8px 24px rgba(44, 211, 126, 0.15)" }
                : {}
            }
            disabled={item.name !== "Dashboard"}
          >
            <span
              className={`text-xl ${
                activeItem === item.name ? "text-white" : "text-gray-400"
              }`}
            >
              {item.icon}
            </span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Discount Card */}
      <div className="bg-green-100 rounded-2xl p-5 mb-8 shadow flex flex-col gap-2 w-56">
        <span className="text-green-500 font-bold text-lg">50% Discount</span>
        <span className="text-gray-500 text-sm">
          Get a discount on certain days and don&apos;t miss it.
        </span>
        <div className="flex justify-end">
          <span className="bg-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl cursor-pointer">
            &rarr;
          </span>
        </div>
      </div>

      {/* Log Out */}
      <button className="flex items-center gap-3 px-6 py-3 rounded-xl text-gray-400 hover:text-red-500 transition mt-auto">
        <span className="text-xl">
          <FaCog />
        </span>
        <span className="text-base">Log Out</span>
      </button>
    </aside>
  );
};

export default Sidebar;

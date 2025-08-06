import React from "react";

import shedule1 from "../assets/shedule1.png";
import shedule2 from "../assets/shedule2.png";
import shedule3 from "../assets/shedule3.png";

const schedules = [
  {
    title: "Crocked Forest",
    date: "20 may - 23 may",
    img: shedule1,
    users: 2,
  },
  {
    title: "Fem Waterfall",
    date: "20 may - 23 may",
    img: shedule2,
    users: 2,
  },
  {
    title: "Night Camping",
    date: "20 may - 23 may",
    img: shedule3,
    users: 2,
  },
];

function ScheduleList() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow">
      <div className="flex items-center justify-between mb-4">
        <span className="text-lg font-semibold text-gray-700">My Schedule</span>
        <span className="text-gray-400 text-xl cursor-pointer">•••</span>
      </div>
      <div className="flex flex-col gap-4">
        {schedules.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center bg-white rounded-xl p-3 shadow hover:shadow-md transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-14 h-14 rounded-xl object-cover mr-3"
            />
            <div className="flex-1">
              <div className="font-semibold text-gray-700">{item.title}</div>
              <div className="text-sm text-gray-400">{item.date}</div>
            </div>
            <div className="flex items-center gap-1">
              <span className="bg-green-100 text-green-500 rounded-full px-2 py-1 text-xs font-bold">
                +{item.users}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScheduleList;

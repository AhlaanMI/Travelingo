import React from "react";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const dates = [
  [27, 28, 29, 30, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31],
];
const activeDates = [20, 21, 22, 23];

function Calendar() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-semibold text-gray-700">
          May <span className="font-normal">2025</span>
        </span>
        <div className="flex gap-2">
          <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 text-lg">
            &lt;
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 text-lg">
            &gt;
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 text-center text-gray-400 text-sm mb-2">
        {days.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-y-2 text-center">
        {dates.flat().map((date, idx) => (
          <span
            key={idx}
            className={`w-8 h-8 flex items-center justify-center rounded-full mx-auto
              ${
                activeDates.includes(date)
                  ? "bg-green-100 text-green-500 font-bold"
                  : "text-gray-700"
              }
              ${date === 3 ? "font-bold" : ""}
            `}
          >
            {date}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Calendar;

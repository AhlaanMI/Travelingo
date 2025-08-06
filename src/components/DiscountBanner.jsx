import React from "react";
import man from "../assets/man.png";

function DiscountBanner() {
  return (
    <div className="bg-[#2D2940] rounded-2xl p-6 shadow flex flex-col items-center w-72">
      <div className="relative mb-4 flex flex-col items-center">
        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-32 h-12 bg-green-300 rounded-full -z-10"></div>
        <img
          src={man}
          alt="Explorer"
          className="w-24 h-28 object-contain mx-auto relative z-10"
        />
      </div>
      <div className="text-white text-xl font-semibold text-center mb-1">
        Let&apos;s Explore
        <br />
        the beauty
      </div>
      <div className="text-gray-200 text-center text-sm mb-6">
        Get special offers &amp; news
      </div>
      <button className="w-full bg-green-500 text-white font-semibold rounded-lg py-2 mt-auto hover:bg-green-600 transition lowercase">
        join now
      </button>
    </div>
  );
}

export default DiscountBanner;

import React from "react";

export default function NavBar() {
  return (
    <div className="w-full flex text-yellow-300 items-center">
      <img
        src="/salamanderlogo.jpeg"
        alt="Salamander Tech Hub logo"
        className="w-12 h-12 sm:w-14 sm:h-14 mr-3 rounded-lg object-cover"
      />
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-yellow-300">
        Salamander Tech Hub
      </p>
    </div>
  );
}

import React from "react";
import logo from "../Images/reserve.jpg";

export default function NavBarPay() {
  return (
    <div>
      <div className="py-2 sm:px-8 px-1 shadow-md flex justify-between items-center">
        <ul className="flex sm:gap-10 gap-3">
          <li className=" flex justify-center font-semibold">
            <img className="w-[30px] h-[30px]  " alt="reserveLogo" src={logo} />
            <h3 className="text-sm sm:text-xl text-[#FF8700] uppercase font-bold sm:mb- flex items-center justify-center md:justify-start">
              <a href="/">Reserve</a>
            </h3>
          </li>
        </ul>
      </div>
    </div>
  );
}

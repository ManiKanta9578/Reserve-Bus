import React from "react";
import reserveLogo from "../Images/reserve.jpg";

export default function FooterPay() {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-[20px] text-[12px] sm:p-3 p-1 font-semibold bg-white">
        <div className="flex gap-2 items-center">
          <div>
            <img
              alt="reserveLogo"
              className="pb-1 sm:w-[37px] w-[25px] h-[25px] items-stretch sm:h-10 rounded-md"
              src={reserveLogo}
            />
          </div>

          <div>
            <h3 className="sm:text-xs text-md text-green-600 uppercase font-bold">
              RESERVE IS SECURED
            </h3>
            <h3 className="sm:text-xs text-md text-green-600 uppercase font-bold">
              100% RBO complaint
            </h3>
          </div>
        </div>
        <div>
          <p className="sm:text-sm text-md">
            By proceeding, You accept Reserve's
            <span className="sm:text-sm text-md text-blue-600 uppercase font-bold ml-2 mr-2">
              User Agreement, Terms of service
            </span>
            and
            <span className="sm:text-sm text-md text-blue-600 uppercase font-bold ml-2">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

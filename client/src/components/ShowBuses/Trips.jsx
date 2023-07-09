import React, { useState } from "react";
import SeatLayout from "./SeatLayout";
import { useSelector } from "react-redux";

const Trips = () => {
  // const selectedDate = useSelector((state) => state.selectedDate);
  const filteredData = useSelector((state) => state.availableBuses);
  // console.log(selectedDate);
  const [selectedBus, setSelectedBus] = useState(null);

  const handleBookNowClick = (bus) => {
    setSelectedBus((prevSelectedBus) => (prevSelectedBus === bus ? null : bus));
  };

  return (
    <div className="">
      {/* Available Buses Space */}
      {filteredData.length > 0 ? (
        <div className="">
          {filteredData.map((bus) => (
            <div
              key={bus.BusNo}
              // className="flex flex-col justify-center  p-2 shadow m-3"
            >
              <div className="flex justify-between shadow m-3 ">
                <div className="col-md-9 h-[100%]">
                  <div>
                    <div className="flex gap-3">
                      <h1 className="sm:text-xl lg:text-xl font-semibold pl-3">
                        <p>{bus.BusName}</p>
                      </h1>
                      <div className="flex gap-1">
                        <p className="bg-green-500 sm:text-sm text-[5px] rounded-md sm:px-1 px-0.5 self-center pb-0 text-white">
                          ⭐4.2
                        </p>
                        <h1 className="text-slate-400 self-center sm:text-sm text-[7px]">
                          ratings
                        </h1>
                      </div>
                    </div>
                    <p className="text-slate-600 px-3 lg:text-base text-xs sm:text-base font-semibold">
                      AC Sleeper(2+1) | {bus.SeatsAvailable} Seats left
                    </p>
                    <h6 className="flex justify-between px-3  sm:text-base lg:text-2xl">
                      {`${bus.DepartureTime}`}
                      <span className="px-3 ml-[10px] text-slate-600 text-sm sm:text-xl text-[9px] lg:text-base ">
                        5h 54m
                      </span>

                      {`${bus.ArrivalTime}`}
                    </h6>
                    <div className="flex justify-between font-bold px-3 ">
                      <p className="sm:text-lg text-xs  font-normal "> {bus.Source}</p>
                      <p className="text-xs font-normal">To</p>
                      <p className="sm:text-lg text-xs font-normal"> {bus.Destination}</p>
                    </div>
                    <div className="flex sm:gap-4 gap-1 m-3">
                      <a
                        href="/"
                        className="text-blue-700 sm:text-sm text-[8px]"
                      >
                        Live Tracking
                      </a>
                      <a
                        href="/"
                        className="text-blue-700 sm:text-sm text-[8px]"
                      >
                        Facilities
                      </a>
                      <a
                        href="/"
                        className="text-blue-700 sm:text-sm text-[8px]"
                      >
                        Policies
                      </a>
                      <a
                        href="/"
                        className="text-blue-700 sm:text-sm text-[8px]"
                      >
                        Amenities
                      </a>
                      <a
                        href="/"
                        className="text-blue-700 sm:text-sm text-[8px]"
                      >
                        Photos
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mr-3 flex items-center">
                  <div>
                    <p className="sm:text-lg lg:text-xl font-semibold ">Trip Cost</p>
                    <p className="text-xs">
                      starting from
                    </p>
                    <div className="text-xl font-semibold">₹ {bus.Fare}</div>
                    <button
                      className="btn mt-3 mb-3 p-2 rounded sm:text-xl text-xs font-semibold"
                      style={{
                        color: "white",
                        backgroundColor: "#FF5733 ",
                      }}
                      onClick={() => handleBookNowClick(bus)}
                    >
                      {selectedBus && selectedBus.BusNo === bus.BusNo
                        ? "Hide Seat"
                        : "View Seat"}
                    </button>
                  </div>
                </div>
              </div>

              {selectedBus && selectedBus.BusNo === bus.BusNo && (
                <SeatLayout bus={bus} />
              )}
            </div>
          ))}
          {/* </div> */}
        </div>
      ) : (
        <div>
          <p className="animate-bounce text-left text-gray-500 text-lg">
            No Buses avaliable
          </p>
        </div>
      )}
    </div>
  );
};

export default Trips;

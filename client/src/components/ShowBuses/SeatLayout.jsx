import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const SeatLayout = ({ bus }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [selectedSeats, setSelectedSeats] = useState({});
  // const [selectedBus, setSelectedBus] = useState(null);

  function handleSeatClick(bus, seatId) {
    setSelectedSeats((prevSelectedSeats) => {
      const busSeats = prevSelectedSeats[bus.BusNo] || [];
      const updatedSeats = [...busSeats];

      if (updatedSeats.includes(seatId)) {
        updatedSeats.splice(updatedSeats.indexOf(seatId), 1);
      } else {
        updatedSeats.push(seatId);
      }

      return {
        ...prevSelectedSeats,
        [bus.BusNo]: updatedSeats,
      };
    });
  }

  // const handleBookNowClick = (bus) => {
  //   setSelectedBus((prevSelectedBus) => (prevSelectedBus === bus ? null : bus));
  // };

  let Navigate = useNavigate();

  const handleFinalSubmit = (event) => {
    event.preventDefault();
    Navigate("/info", {
      state: {
        selectedBus: bus, // Pass the entire bus object
        selectedSeats: selectedSeats[bus.BusNo] || [],
      },
    });
  };
  console.log(selectedSeats);

  return (
    <div>
      <div className="flex justify-between p-4">
        <div>
          <h5>Select Seats:</h5>
          <div className="flex gap-4 justify-center items-center">
            <p className="text-sm font-semibold text-slate-400 mt-1">
              Select Price
            </p>
            <div className="flex gap-4">
              <label className=" flex items-center gap-1">
                <input type="radio" name="seatPrice" value="all" />{" "}
                <span>All</span>
              </label>
              <label className=" flex items-center gap-1">
                <input type="radio" name="seatPrice" value="200" />
                ₹200
              </label>
              <label className=" flex items-center gap-1">
                <input
                  type="radio"
                  name="seatPrice"
                  value="300"
                  className="flex items-center gap-1"
                />
                ₹300
              </label>
              <label className=" flex items-center gap-1">
                <input type="radio" name="seatPrice" value="400" />
                ₹400
              </label>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <label className="radio-btn">
            <input type="radio" name="seatPrice" value="all" className="mr-3" />
            Booked
          </label>
          <br />
          <label className="radio-btn">
            <input type="radio" name="seatPrice" value="200" className="mr-3" />
            Available
          </label>
        </div>
      </div>
      <div className="flex flex-col md:flex-row m-3 justify-center items-center gap-2">
        {/* seat layout */}
        <div>
          <div
            className={`flex flex-wrap md:w-3/4 border border-black rounded mb-3 ${
              isMobile ? "sm:mb-6" : ""
            }`}
          >
            {/* Upper layout */}
            {[...Array(24)].map((curEle, index) => (
              <div
                key={index + 1}
                className={
                  "seat" +
                  (selectedSeats[bus.BusNo]?.includes(index + 1)
                    ? " selected"
                    : "")
                }
                onClick={() => handleSeatClick(bus, index + 1)}
                style={{
                  border: "1px solid #000000",
                  height: isMobile ? "15px" : "20px",
                  width: isMobile ? "25px" : "45px",
                  marginBottom: isMobile ? "4px" : "6px",
                  cursor: "pointer",
                  zIndex: "9999",
                  position: "relative",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <div
                  className="innerBox"
                  style={{
                    backgroundColor: "#D3D3D3",
                    height: isMobile ? "70%" : "85%",
                    width: isMobile ? "4px" : "8px",
                    marginRight: isMobile ? "3px" : "5px",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap md:w-3/4 border border-black rounded ">
            {/* Lower layout */}
            {[...Array(24)].map((curEle, index) => (
              <div
                key={index + 25}
                className={
                  "seat" +
                  (selectedSeats[bus.BusNo]?.includes(index + 25)
                    ? " selected"
                    : "")
                }
                onClick={() => handleSeatClick(bus, index + 25)}
                style={{
                  border: "1px solid #000000",
                  height: isMobile ? "15px" : "20px",
                  width: isMobile ? "25px" : "45px",
                  marginBottom: isMobile ? "4px" : "6px",
                  cursor: "pointer",
                  zIndex: "9999",
                  position: "relative",
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                }}
              >
                <div
                  className="innerBox"
                  style={{
                    backgroundColor: "#D3D3D3",
                    height: isMobile ? "70%" : "85%",
                    width: isMobile ? "4px" : "8px",
                    marginRight: isMobile ? "3px" : "5px",
                    borderRadius: "2px",
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        {/* Boarding details */}
        <div className="shadow-md md:w-1/2 w-[100%] p-3 border-2 rounded">
          <p className="lg:text-xl  font-semibold">Boarding & Dropping</p>
          <div className="flex m-3 justify-around">
            <div className="ml-4">
              <p className="font-medium">{bus.Source}</p>
              <p className="text-xs">RTC Complex</p>
            </div>
            <p className="ml-7 mt-4">{bus.DepartureTime} </p>
          </div>
          <div className="flex m-3 justify-around">
            <div className="ml-4">
              <p className="font-medium"> {bus.Destination} </p>
              <p className="text-xs">Ameerpet</p>
            </div>
            <p className="ml-10 mt-4"> {bus.ArrivalTime} </p>
          </div>
          <hr className="border border-gray-400"></hr>
          <table>
            <thead>
              <th className="font-semibold lg:text-xl">Fair Details</th>
            </thead>
            <tbody>
              <tr>
                <td className="">Seat No:</td>
                <td>{selectedSeats[bus.BusNo]?.join(", ")}</td>
              </tr>
              <tr>
                <td>Amount:</td>
                <td className="text-xl">₹ {bus.Fare * (selectedSeats[bus.BusNo]?.length || 0)}</td>
              </tr>
            </tbody>
          </table>

          
          <div className="flex justify-center">
            <button
              className="bg-green-800 p-2 rounded text-white lg:text-lg sm:text-base w-full cursor-pointer  "
              onClick={handleFinalSubmit}
              disabled={!selectedSeats[bus.BusNo]?.length}
            >
              Proceed to book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatLayout;

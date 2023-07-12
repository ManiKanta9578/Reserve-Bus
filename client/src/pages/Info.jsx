import React, { useState } from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import FareDetails from "../components/Info/FareDetails";
import BusInfo from "../components/Info/BusInfo";
import { setPassengerInfo, setContactInfo } from "../redux/slicer";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const url = "https://reserve-bus-23fn.onrender.com/api";

const Info = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const location = useLocation();
  const { selectedBus, selectedSeats } = location.state;
  const selectedDate = useSelector((state) => state.selectedDate);
  // console.log(selectedSeats);

  const [passengerDetails, setPassengerDetails] = useState([]);
  const [contactDetails, setContactDetails] = useState({
    email: "",
    mobile: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form Data:", passengerDetails);
    // console.log("Contact Details:", contactDetails);
    dispatch(setPassengerInfo(passengerDetails));
    dispatch(setContactInfo(contactDetails));

    navigate("/payment", {
      state: {
        selectedBus,
        selectedSeats,
      },
    });

    //Save receipt data to server
    const receiptData = {
      passengerDetails,
      contactDetails,
      selectedBus,
      selectedSeats,
      selectedDate,
    };

    await axios
      .post(`${url}/receipt`, receiptData)
      .then((res) => {
        console.log("Receipt data saved successfully");
      })
      .catch((err) => console.log(err.message));
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    setPassengerDetails((prevDetails) => {
      const updatedDetails = [...prevDetails];
      updatedDetails[index] = { ...updatedDetails[index], [name]: value };
      return updatedDetails;
    });
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    console.log("Contact Form Values:", contactDetails);
    setContactDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3 p-5 bg-slate-100 md:flex-row ">
          {/* Bus Info */}
          <div className="flex-1 md:w-3/4">
            <BusInfo selectedBus={selectedBus} />

            {/* Traveller Details */}
            <div className=" border shadow p-4 rounded bg-slate-50 mt-3">
              <h2>Traveller Details</h2>
              {selectedSeats.map((seat, index) => (
                <div
                  key={seat}
                  className="my-4 border shadow p-4 rounded bg-white"
                >
                  <h3 className="text-lg font-semibold">
                    Passenger {index + 1} - Seat {seat}
                  </h3>
                  <div className="mt-2">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="mb-2">
                        <label
                          htmlFor={`name-${index}`}
                          className="text-sm font-medium"
                        >
                          Name:
                        </label>
                        <br />
                        <input
                          type="text"
                          id={`name-${index}`}
                          name={`name-${index}`}
                          value={
                            passengerDetails[index]
                              ? passengerDetails[index].name
                              : ""
                          }
                          onChange={(e) => handleChange(e, index)}
                          required
                          placeholder="Enter Full Name"
                          className="px-2 py-1 border border-gray-300 rounded"
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor={`age-${index}`}
                          className="text-sm font-medium"
                        >
                          Age:
                        </label>
                        <br />
                        <input
                          type="number"
                          id={`age-${index}`}
                          name={`age-${index}`}
                          value={
                            passengerDetails[index]
                              ? passengerDetails[index].age
                              : ""
                          }
                          onChange={(e) => handleChange(e, index)}
                          required
                          placeholder="Age"
                          className="px-2 py-1 border border-gray-300 rounded"
                        />
                      </div>
                      <div className="mb-2">
                        <label
                          htmlFor={`gender-${index}`}
                          className="text-sm font-medium"
                        >
                          Gender:
                        </label>
                        <br />
                        <select
                          id={`gender-${index}`}
                          name={`gender-${index}`}
                          value={
                            passengerDetails[index]
                              ? passengerDetails[index].gender
                              : ""
                          }
                          onChange={(e) => handleChange(e, index)}
                          required
                          className="px-2 py-1 border border-gray-300 rounded"
                        >
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div>
                {/* <ContactForm
                contactDetails={contactDetails}
                handleContactChange={handleContactChange}
              /> */}
                <div className="my-4 border shadow p-4 rounded">
                  <h3>Contact Details</h3>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <div>
                      <label className="text-sm font-medium">Email:</label>
                      <br />
                      <input
                        type="text"
                        name="email"
                        value={contactDetails.email}
                        onChange={handleContactChange}
                        placeholder="Email"
                        className="px-2 py-1 border border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">
                        Mobile Number:
                      </label>
                      <br />
                      <input
                        type="text"
                        name="mobile"
                        value={contactDetails.mobile}
                        onChange={handleContactChange}
                        placeholder="Mobile Number"
                        className="px-2 py-1 border border-gray-300 rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <PayButton
              numSeats={selectedSeats.length}
              selectedBus={selectedBus}
              selectedSeats={selectedSeats}
            /> */}
            </div>
          </div>

          {/* Fare Details */}
          <div className="flex-2 md:w-1/4">
            <div className=" border rounded shadow p-3 border-solid bg-white">
              <FareDetails
                selectedSeats={selectedSeats}
                selectedBus={selectedBus}
              />
            </div>
            <button
              type="submit"
              className="bg-[rgba(233,115,72,0.961)] p-3 text-[white] text-lg font-semibold w-full rounded-[5px]"
              // onClick={() => handleCheckout()}
            >
              Pay ₹{selectedSeats.length * selectedBus.Fare + 150 - 50}
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Info;

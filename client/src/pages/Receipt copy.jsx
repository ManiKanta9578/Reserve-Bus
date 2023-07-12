import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://reserve-bus-23fn.onrender.com/api";

const Receipt = () => {
  const [latestReceipt, setLatestReceipt] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch receipt data from the server
    axios
      .get(`${url}/receipt`)
      .then((res) => {
        const receiptData = res.data;
        // Sort the receipt data in descending order based on creation timestamp
        receiptData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        // Retrieve the latest receipt
        const latestReceipt = receiptData[0];
        setLatestReceipt(latestReceipt);
        // Set loading to false after 3 seconds
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      })
      .catch((err) => console.log(err.message));
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="bg-indigo-500 flex justify-evenly items-center rounded">
          <div
            className=" ml-3 inline-block h-6 w-6 animate-spin rounded-full border-4 border-white border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
          <p className="text-white p-3">Processing...</p>
        </div>
      </div>
    );
  }

  if (!latestReceipt) {
    return <div>No receipt data available</div>;
  }

  const { passengerDetails, contactDetails, selectedBus, selectedSeats } =
    latestReceipt;

  return (
    <div>
      <h1>Receipt</h1>
      <h2>Passenger Details:</h2>
      <ul>
        {passengerDetails.map((passenger, index) => {
          const nameKey = `name-${index}`;
          const ageKey = `age-${index}`;
          const genderKey = `gender-${index}`;
          const seatNumber = selectedSeats[index];

          return (
            <li key={index}>
              Name: {passenger[nameKey]}, Age: {passenger[ageKey]}, Gender:{" "}
              {passenger[genderKey]}, Seat Number: {seatNumber}
            </li>
          );
        })}
      </ul>
      <h1>Contact Details:</h1>
      <p>Email: {contactDetails.email}</p>
      <p>Mobile: {contactDetails.mobile}</p>
      <h1>Bus Details:</h1>
      <p>Bus Name: {selectedBus.BusName}</p>
      <p>Source: {selectedBus.Source}</p>
      <p>Destination: {selectedBus.Destination}</p>
      <p>Start Time: {selectedBus.DepartureTime}</p>
      <p>End Time: {selectedBus.ArrivalTime}</p>
      <p>Bus Fare: {selectedBus.Fare}</p>
    </div>
  );
};

export default Receipt;

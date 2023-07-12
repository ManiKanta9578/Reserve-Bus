import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const url = "https://reserve-bus-23fn.onrender.com/api";


const PayButton = ({ numSeats,selectedSeats,selectedBus }) => {
  const navigate = useNavigate();
  // const {numSeats,selectedSeats,selectedBus} = data;
    console.log(numSeats);
  const handleCheckout = () => {
    // console.log("Pay button: ",selectedSeats);
    // axios
    //   .post(`${url}/stripe/create-checkout-session`, {
    //     numSeats,
    //     selectedBus,
    //     selectedSeats,
    //   })
    //   .then((res) => {
    //     if (res.data.url) {
    //       window.location.href = res.data.url;
    //     }
    //   })
    //   .catch((err) => console.log(err.message));
      navigate("/receipt")
  };

  return (
    <>
      <button
        type="submit"
        className="bg-[rgba(233,115,72,0.961)] p-3 text-[white] text-lg font-semibold w-full rounded-[5px]"
        onClick={() => handleCheckout()}
      >
        Pay ₹{selectedSeats.length * selectedBus.Fare + 150 - 50}
      </button>
    </>
  );
};

export default PayButton;

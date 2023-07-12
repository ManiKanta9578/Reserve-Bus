import React from "react";
import PaymentComp from "../components/PaymentComp";
import NavBarPay from "../components/NavBarPay";
import FooterPay from "../components/FooterPay";

const Payment = () => {
  return (
    <>
      <NavBarPay />
      <PaymentComp />
      <FooterPay />
    </>
  );
};

export default Payment;

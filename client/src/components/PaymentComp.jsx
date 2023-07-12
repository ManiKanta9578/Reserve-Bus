import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedBus, selectedSeats } = location.state;
  const [expiry, setExpiry] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const handleExpiryChange = (e) => {
    const { value } = e.target;
    const formattedValue = value
      .replace(/\D/g, "") // Remove non-digit characters
      .slice(0, 4); // Limit input to a maximum of 4 characters

    // Format the input as MM/YY
    const month = formattedValue.slice(0, 2);
    const year = formattedValue.slice(2, 4);
    const formattedExpiry = `${month}/${year}`;

    setExpiry(formattedExpiry);
  };

  const handleCardNum = (e) => {
    const formattedValue = e.target.value
      .replace(/\s/g, "") // Remove whitespace
      .replace(/(\d{4})(?=\d)/g, "$1 "); // Add space after every 4 digits

    e.target.value = formattedValue;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading spinner
    // Process the payment and any additional logic here

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false); // Stop loading spinner
      setIsPaymentSuccessful(true);
      setTimeout(() => {
        navigate("/receipt");
      }, 2000);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="max-w-md w-full sm:w-80vw space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-normal text-gray-900">
          Pay <span className="mt-6 text-center text-3xl font-normal text-[rgba(233,115,72,0.961)] ">₹{selectedSeats.length * selectedBus.Fare + 150 - 50}</span> to confirm booking
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="card-info">Card information</label>
              <input
                id="card-info"
                name="card-info"
                type="tel"
                pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
                maxLength={19}
                required
                onChange={handleCardNum}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                placeholder="1234 1234 1234 1234"
              />
            </div>
            <div className="flex">
              <div>
                <label htmlFor="expire" className="sr-only">
                  Expire
                </label>
                <input
                  id="expiry"
                  name="expiry"
                  type="text"
                  value={expiry}
                  onChange={handleExpiryChange}
                  maxLength={5}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="MM/YY"
                />
              </div>

              <div>
                <label htmlFor="cvv" className="sr-only">
                  cvv
                </label>
                <input
                  id="cvv"
                  name="cvv"
                  type="password"
                  maxLength={3}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
                  placeholder="cvv"
                />
              </div>
            </div>
            <div>
              <label htmlFor="first-name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="country" className="text-slate-600">
              <h1>Country or region</h1>
            </label>
            <select
              name="country"
              className="rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 focus:z-10 sm:text-sm"
            >
              <option value="india" defaultValue>
                India
              </option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ${
                isPaymentSuccessful ? "bg-green-800" : "bg-blue-500"
              } hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                <>{isPaymentSuccessful ? "Success" : "Pay"}</>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;

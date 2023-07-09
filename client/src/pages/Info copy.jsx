import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import "./info.css";

const Info = () => {
  const { state } = useLocation();
  const Navigate = useNavigate();

  let bus = state.ChoosedBus.selectedBus;
  let SelectedSeats = state.ChoosedBus.selectedSeats;
  
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let form = JSON.stringify(formData);
    let busData = JSON.stringify(bus);
    localStorage.setItem("BUS", busData);
    localStorage.setItem("FORM", form);
    Navigate("/receipt", { state: { formData, bus } });
  };

  return (
    <div className="flex gap-10">
      <div>
        <div className="flex h-44 mt-4 ml-16 rounded-[10px] border-2 border-solid border-[rgb(169,169,169)] w-[900px]">
          <div className="flex flex-col justify-between w-[950px] p-5 ">
            <div className="flex flex-col gap-2.5">
              <div className="flex gap-2.5">
                <h3 className="font-bold text-[large]"> {bus.BusName} </h3>
                <p
                  style={{
                    backgroundColor: "green",
                    borderRadius: "10px",
                    padding: "2px",
                    color: "white",
                  }}
                >
                  ⭐4.5
                </p>
                <p> Rating</p>
              </div>
              <div className="flex gap-2.5">
                <p>Ac </p>
                <p>|</p>
                <p>{bus.SeatsAvailable}</p>
                <p>|</p>
                <p>0 windows Left</p>
              </div>
              <div className="flex gap-2.5">
                <p>{`${bus.DepartureTime}, ${bus.Date} `}</p>
                <p> --- 07 hrs 58 min ---</p>
                <p> {`${bus.ArrivalTime}, ${bus.Date}`} </p>
              </div>
              <div className="flex gap-52">
                <p>{bus.Source}</p>
                <p>To</p>
                <p>{bus.Destination}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Enter Traveller Details */}
        <div className="ml-16 mt-8 w-[900px] ">
          <h2 className="font-semibold text-[x-large]">
            Enter Traveller Details
          </h2>
          <div className="flex flex-col mt-4 mb-8 p-5 border-2 border-solid border-[rgb(169,169,169)] rounded-[10px]">
            <div className="flex text-[large] font-medium gap-[25px]">
              <p>Passanger 1</p>
              <p>Seat 16</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-[30px] mt-4">
                <div className="flex flex-col gap-2.5">
                  <label className="text-[rgb(112,105,105)]" htmlFor="name">
                    Name
                  </label>
                  <input
                    className=" w-[400px] h-10 rounded-[5px] border-2 border-solid border-[rgb(169,169,169)]"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="Gender" className="text-[rgb(112,105,105)]">
                    Gender
                  </label>
                  <select
                    className="w-[150px] h-10 pl-[5px] rounded-[5px] border-2 border-solid border-[rgb(169,169,169)]"
                    id="Gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2.5">
                  <label htmlFor="age" className="text-[rgb(112,105,105)]">
                    Age
                  </label>
                  <input
                    type="number"
                    className="w-[150px] h-10 rounded-[5px] border-2 border-solid border-[rgb(169,169,169)]"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
              </div>
              <div>
                <div className="flex gap-[30px] mt-4">
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="email" className="text-[rgb(112,105,105)]">
                      Email
                    </label>
                    <input
                      className=" w-[400px] h-10 rounded-[5px] border-2 border-solid border-[rgb(169,169,169)]"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=""
                    />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="mobile" className="text-[rgb(112,105,105)]">
                      Mobile No.
                    </label>
                    <input
                      type="number"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=""
                      className="w-[400px] h-10 rounded-[5px] border-2 border-solid border-[rgb(169,169,169)]"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 h-full w-[350px] mt-4 p-5 rounded-[10px] border-2 border-solid border-[rgb(169,169,169)]">
        <h2 className="font-bold text-[large]">Fare Details</h2>
        <div className="flex justify-between">
          <p>Base Farm</p>
          <h2 className="font-semibold">₹ {SelectedSeats.length * bus.Fare}</h2>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <h2 className="font-semibold">₹ 150</h2>
        </div>
        <div className="flex justify-between">
          <p>Offer Applid</p>
          <h2 className="font-semibold">₹ 50</h2>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Base Farm</p>
          <h2 className="font-semibold">
            ₹{SelectedSeats.length * bus.Fare + 150 - 50}
          </h2>
        </div>
        <button className="bg-[rgba(233,115,72,0.961)] h-[45px] text-[white] rounded-[5px]">
          Process To Payment
        </button>
      </div>
    </div>
  );
};

export default Info;

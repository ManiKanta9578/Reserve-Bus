import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import {data} from "../Data/BusData";
import "../Styles/LandingPage.css";

const LandingPages = () => {
 
    const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sourceCities = [...new Set(data.map((val) => val.Source))];
  const sourceDestination = [...new Set(data.map((val) => val.Destination))];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // or send the form data to the server

    const filteredData = data.filter((bus) => {
      return (
        bus.Source.toLowerCase() === formData.source.toLowerCase() &&
        bus.Destination.toLowerCase() === formData.destination.toLowerCase() &&
        bus.Date === formData.date
      );
    });

    Navigate("/showbuses", { state: { data: filteredData } });
  };


  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-6 justify-center items-center p-4 mt-[5rem]"
      >
        <>
          <label htmlFor="source" className="text-slate-600">
            <h1>From</h1>
          </label>
          <select
            name="source"
            value={formData.source}
            onChange={handleChange}
            className="border p-2"
          >
            <option value="" className="text-slate-600">
              Select City
            </option>
            {sourceCities.map((ele, i) => (
              <option key={i} value={ele.Source}>
                {ele}
              </option>
            ))}
          </select>
        </>

        <>
          <label htmlFor="destination" className="text-slate-600 ">
            <h1>To</h1>
          </label>
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="border p-2"
          >
            <option value="" className="text-slate-600">
              Select City
            </option>
            {sourceDestination.map((ele, i) => (
              <option key={i} value={ele.Source}>
                {ele}
              </option>
            ))}
          </select>
        </>

        <>
          <label htmlFor="date" className="text-slate-600">
            <h1>Journey Date</h1>
          </label>
          <input
            className="border p-2"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </>

        <button
          type="submit"
          className="bg-blue-500 px-6 py-2 text-slate-200 rounded"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default LandingPages;

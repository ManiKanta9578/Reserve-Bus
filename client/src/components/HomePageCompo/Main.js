import React, { useState } from "react";
import bgimage from "../../Images/main.jpg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAvailableBuses } from "../../redux/slicer";
import { setSelectedDate } from "../../redux/slicer";

export default function Main() {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
  });

  // const dateee = useSelector((state) => state.selectedDate);
  // console.log(dateee);

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    dispatch(setSelectedDate(selectedDate));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const busData = useSelector((state) => state.busData);
  // console.log(busData);
  const sourceCities = [...new Set(busData?.map((val) => val.Source))];
  // console.log(sourceCities);
  const sourceDestination = [
    ...new Set(busData?.map((val) => val.Destination)),
  ];
  // console.log(sourceDestination)

  const handleSubmit = (event) => {
    event.preventDefault();

    const filteredData = busData.filter((bus) => {
      return (
        bus.Source === formData.source &&
        bus.Destination === formData.destination &&
        bus.Date !== formData.date
      );
    });

    // console.log(filteredData);

    dispatch(setAvailableBuses(filteredData));
    Navigate("/showbuses");
  };

  const currentDate = new Date().toISOString().split("T")[0];

  // console.log(dateValue);

  return (
    <div
      className="lg:h-[95vh]  bg-cover bg-center flex-col flex items-center"
      style={{ backgroundImage: `url(${bgimage})` }}
    >
      <form onSubmit={handleSubmit}>
        <div className="flex ">
          <div className="flex flex-col md:flex-row justify-center items-center  h-[65vh] rounded-xl ">
            <div className="border-2 pr-3 py-1 rounded-l-xl text-left pl-3 w-full bg-white">
              {/* <SearchInput
              setVal={setFrom}
              data={data.Source}
              placeholder="From"
            /> */}
              <label htmlFor="source" className="text-slate-600">
                <h1>From</h1>
              </label>
              <select
                name="source"
                value={formData.source}
                onChange={handleChange}
                className="border p-2 rounded"
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
            </div>

            <div className="border-2 pr-3 py-1 text-left pl-3 bg-white w-full">
              {/* <SearchInput
              setVal={setTo}
              data={data.destination}
              placeholder="To"
            /> */}
              <label htmlFor="destination" className="text-slate-600 ">
                <h1>To</h1>
              </label>
              <select
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="border p-2 rounded"
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
            </div>

            <div className="border-2 pr-3 py-1 pl-3 rounded-r-xl bg-white">
              {/* <label className="text-xl font-mono font-medium text-slate-500">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={data.Date}
              onChange={(e) => setDate(e.target.value)}
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Travel-Date"
              min={new Date().toISOString().split("T")[0]}
            /> */}
              <label htmlFor="date" className="text-slate-600">
                <h1>Travel Date</h1>
              </label>
              {/* <input
                className="border p-2 rounded"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              /> */}
              <input
                className="border p-2 rounded"
                type="date"
                name="date"
                placeholder="Select a date"
                defaultValue={currentDate}
                min={currentDate}
                onChange={handleDateChange}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-[#FF8700]  p-3 text-2xl rounded-xl px-12 "
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

import React from "react";

const SearchInput = ({ setVal, data, placeholder }) => {
  return (
    <div>
      <label className="text-xl font-mono font-medium text-slate-500">{placeholder}</label>
      <input
        list="data" type="search" size={30} onChange={(e) => setVal(e.target.value)} placeholder={placeholder}
        className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      />
      {data?
      <datalist id="data">
        {data.map((option, id) => (<option key={id}>{option.BusName}</option>))}
      </datalist>:null}
    </div>
  );
};

export default SearchInput;
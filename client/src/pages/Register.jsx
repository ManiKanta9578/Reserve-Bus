import React from "react";

const Register = () => {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-center bg-cover"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url("https://images.pexels.com/photos/9979348/pexels-photo-9979348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="w-[43%] p-5 bg-white">
        <p className="font-light text-2xl">CREATE AN ACCOUNT</p>
        <div className="flex flex-wrap">
          <input placeholder="First Name" className="flex-1 border-black mt-5 border p-2 mx-2" />
          <input placeholder="Last Name" className="flex-1  mt-5 border-black border p-2 mx-2"/>
          <input placeholder="username" className="flex-1  mt-5 border-black border p-2 mx-2"/>
          <input placeholder="Email" className="flex-1  mt-5 border-black border p-2 mx-2"/>
          <input placeholder="Password" className="flex-1  mt-5 border-black border p-2 mx-2"/>
          <input placeholder="Confirm Password" className="flex-1  mt-5 border-black border p-2 mx-2"/>
          <p className="my-5 text-xs">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </p>
          <button className="w-52 border-none bg-teal-700 text-white py-3 px-2 cursor-pointer">CREATE</button>
        </div>
      </div>
    </div>
  );
};

export default Register;

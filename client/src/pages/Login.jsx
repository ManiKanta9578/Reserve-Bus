import React from "react";

const Login = () => {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-center bg-cover"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url("https://images.pexels.com/photos/3608967/pexels-photo-3608967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
      }}
    >
      <div className="w-[25%] p-5 bg-white">
        <p className="font-light text-2xl">CREATE AN ACCOUNT</p>
        <div className="flex flex-col">
          <input
            placeholder="username"
            className="flex-1  mt-5 border-black border p-2 mx-2"
          />
          <input
            placeholder="Password"
            className="flex-1  mt-5 border-black border p-2 mx-2"
          />
          <button className="w-40 border-none my-4 bg-teal-700 text-white py-3 px-2 cursor-pointer">
            CREATE
          </button>
          <a href="/" className="text-blue-700 sm:text-sm text-[8px]">
          DO NOT YOU REMEMBER THE PASSWORD?
          </a>
          <a href="/register" className="text-blue-700 sm:text-sm text-[8px]">
          CREATE A NEW ACCOUNT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

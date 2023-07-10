import React from "react";

const Login = () => {
  return (
    <div
      className="min-h-[90vh] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://www.team-bhp.com/forum/attachments/commercial-vehicles/1768712d1528275775-mercedes-launches-2441-shd-coach-161165.jpg")',
      }}
    >
      <div className="max-w-md w-full space-y-8 bg-white p-6 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-normal text-gray-900">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          <div>
            <input
              placeholder="Username"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>
          <div>
            <input
              placeholder="Password"
              type="password"
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="/"
                className="font-medium text-teal-600 hover:text-teal-500"
              >
                Forgot password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="w-32 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                Login
              </button>
            </div>
          </div>
        </form>
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?
            <a
              href="/register"
              className="font-medium text-teal-600 hover:text-teal-500"
            >
              Create a new account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

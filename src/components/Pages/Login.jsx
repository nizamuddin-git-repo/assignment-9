import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-10">
        <div className="flex justify-center">
          <div className="mt-10 w-1/2">
            <h2 className="text-3xl text-center">Please Login </h2>
            <form onSubmit={handleLogin} className="shadow-2xl p-8 rounded-2xl mt-5">
          <div className="relative">
            <input
              className="mb-4 w-full py-2 px-4 rounded-lg input input-bordered"
              type="text"
              name="name"
              placeholder="Name"
              required
              id=""
            />
            <br />
            <input
              className="mb-4 w-full py-2 px-4 rounded-lg input input-bordered"
              type="email"
              name="email"
              placeholder="Email Adderss"
              required
              id=""
            />
            <br />
            <input
              className="w-full py-2 px-4 rounded-lg mt-1 input input-bordered"
              type={showPassword ? "test" : "password"}
              name="password"
              placeholder="Password"
              required
              id=""
            />
            <span
              className="absolute right-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              <div className="flex justify-end mt-4 relative">
                {showPassword ? (
                  <FaEyeSlash className="text-2xl"></FaEyeSlash>
                ) : (
                  <FaEye className="text-2xl"></FaEye>
                )}
              </div>
            </span>
            <br />
            <div className="flex mt-4">
              <input type="checkbox" name="terms" id="terms" />
              <label className="ml-2" htmlFor="terms">
                <a href="">Accept Terms And Conditions</a>
              </label>
            </div>
            <input
              className="btn btn-success mt-4 w-full"
              type="submit"
              value="Register"
            />
          </div>
        </form>
            <p className="text-center mt-3">
              Already Have An Account
              <Link className="text-success ml-3" to="/register">
                Register
              </Link>
            </p>
            <div className="mt-3 flex justify-center">
              <div>
                <button className="btn btn-success mr-4">Google Login</button>
                <button className="btn bg-slate-600 mr-4 text-white">
                  Github Login
                </button>
                <button className="btn bg-blue-800 text-white">
                  Facebook Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const {singInUser, googleLogin, githubLogin, facebookLogin,twiterLogin} = useAuth();
    const [showPassword, setShowPassword] = useState(false);

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmitLogin = (data) => {
      const {email,password} = data;
      singInUser(email,password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error)
    })
    }
  
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
            <form onSubmit={handleSubmit(onSubmitLogin)} className=" p-8 border-2 rounded-3xl mt-4">
          <div className="relative">
          <span className="label-text">Name</span>
          <IoMdContact className="absolute mt-3 text-2xl ml-1"></IoMdContact>
            <input
              className=" p-4 w-full py-2 px-8 rounded-lg input input-bordered"
              type="text"
              name="name"
              placeholder="Name"
              id=""
              {...register("name", { required: true })} 
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
            <br />
            <span className="label-text">Email Adderss</span>
            <MdEmail className="absolute mt-3 text-2xl ml-1"></MdEmail>
            <input
              className=" w-full py-2 px-8 rounded-lg input input-bordered"
              type="email"
              name="email"
              placeholder="Email Adderss"
              id=""
              {...register("email", { required: true })} 
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
            <br />
            <span className="label-text">Password</span>
            <FaLock className=" absolute mt-4 text-xl ml-1"></FaLock>
            <input
              className="w-full py-2 px-8 rounded-lg mt-1 input input-bordered"
              type={showPassword ? "test" : "password"}
              name="password"
              placeholder="Password"
              id=""
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-500">This field is required</span>}
            <span
              className="absolute right-4"
              onClick={() => setShowPassword(!showPassword)}
            >
              <div className="flex justify-end mt-4 relative">
                {showPassword ? (
                  <Link><FaEye className="text-2xl"></FaEye></Link>
                  
                ) : (
                  <Link><FaEyeSlash className="text-2xl"></FaEyeSlash></Link>
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
                <button onClick={googleLogin} className="btn btn-success mr-4">Google Login</button>
                <button onClick={githubLogin} className="btn bg-slate-600 mr-4 text-white">
                  Github Login
                </button>
                <button onClick={facebookLogin} className="btn bg-blue-800 text-white mr-4">
                  Facebook Login
                </button>
                <button onClick={twiterLogin} className="btn bg-black text-white">
                Twitter Login
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

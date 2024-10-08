import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { IoMdContact } from "react-icons/io";
import { FaImages } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";




const Register = () => {
  const {createUser} = useAuth()
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmitRegister = (data) => {
    const {email,password} = data;
    createUser(email,password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error =>{
      console.log(error)
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);

    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "your password should have a least one upper case characters."
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and conditions!");
      return;
    }
  };
  
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center">
      <div className="mt-10 w-1/2">
        <h2 className="text-3xl p-4 text-center">Please Register</h2>
        <form onSubmit={handleSubmit(onSubmitRegister)} className="border-2 p-8 rounded-2xl mt-4">
          <div className="relative">
          <label className="label">
              <span className="label-text">Name</span>
            </label>
            <IoMdContact className="absolute mt-3 text-2xl ml-1"></IoMdContact>
            <input
              className=" w-full py- px-8 rounded-lg input input-bordered"
              type="text"
              name="name"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-600">This field is required</span>}
            <br />
             <span className="label-text mt-3">Photo URL</span>
             <FaImages className="absolute mt-3 text-2xl ml-1"></FaImages>
            <input
              className="w-full py-2 px-8 rounded-lg input input-bordered"
              type="text"
              name="photo"
              placeholder="Photo URL"
              {...register("photo", { required: true })}
            />
            {errors.photo && <span className="text-red-600">This field is required</span>}
            <br />
              <span className="label-text">Email</span>
              <MdEmail className="absolute mt-3 text-2xl ml-1"></MdEmail>
            <input
              className="w-full py-2 px-8 rounded-lg input input-bordered"
              type="email"
              name="email"
              placeholder="Email Adderss"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-600">This field is required</span>}
            <br />
              <span className="label-text">Password</span>
              <FaLock className="absolute mt-4 text-xl ml-1"></FaLock>
            <input
              className="w-full py-2 px-8 rounded-lg mt-1 input input-bordered"
              type={showPassword ? "test" : "password"}
              name="password"
              placeholder="Password"
              id=""
              {...register("password", { required: true })}
            />
            {errors.password && <span className="text-red-600">This field is required</span>}
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
        {registerError && <p className="text-red-600 mt-4">{registerError}</p>}
        {success && <p className="text-green-600 mt-3">{success}</p>}
        <p className="mt-3 text-center">
          Already Have An Account? <Link className="text-success" to="/login">Login</Link>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Register;

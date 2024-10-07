import { Link, NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const {user,logOut} = useAuth();
  console.log(user);

 
  
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-black font-bold bg-success py-3" : "font-semibold py-3"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-black font-bold bg-success py-3" : "font-semibold py-3"
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "text-black font-bold bg-success py-3" : "font-semibold py-3"
          }
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-black font-bold bg-success py-3" : "font-semibold py-3"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-black font-bold bg-success py-3" : "font-semibold py-3"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
         <div className="">
         <Link to='/' className="btn btn-success text-xl">
          <FaHome className="text-4xl"></FaHome>
          <p className="text-sm">Find Home</p>
          </Link>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{navLink}</ul>
        </div>
        <div className="navbar-end">
        {
          user ? <>
          
          <span>{user.email}</span>
          <button onClick={() => logOut()} className="btn btn-outline btn-error ">LogOut</button>
          
          </> 
          : <Link to="/login"> 
          <button className="btn  btn-success">Login</button>
          </Link>
        }
        </div>
      </div>
    </div>
  );
};

export default Navbar;

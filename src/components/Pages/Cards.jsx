import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { HiCurrencyDollar } from "react-icons/hi2";
import { MdOutlineSquareFoot } from "react-icons/md";

const Cards = ({ card }) => {
  const {
    id,
    estate_title,
    relevant_image,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
  } = card;
  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-5  hover:scale-105 border-4 hover:border-success">
      <figure>
        <img className="rounded-xl mt-6" src={relevant_image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{estate_title}</h2>
        <h2 className="font-bold">{facilities}</h2>
        <div className="mt-2">
          <p className="flex text-sm font-semibold gap-2">
            <MdLocationOn className="text-3xl"></MdLocationOn>
            {location}
          </p>
        </div>
        <div className="flex mt-3">
          <p className="flex gap-2 font-semibold">
            <HiCurrencyDollar className="text-2xl"></HiCurrencyDollar>
            {price}
          </p>
          <p className="flex font-semibold">
            <MdOutlineSquareFoot className="text-3xl"></MdOutlineSquareFoot>
            {area}
          </p>
        </div>
        <p className="text-sm mt-3 font-semibold">{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/property/${id}`}>
            <button className="btn btn-success">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;

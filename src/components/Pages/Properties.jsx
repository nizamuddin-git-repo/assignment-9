import React from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "./Cards";

const Properties = () => {
  const properties = useLoaderData();
  console.log(properties);
  return (
    <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-5 sm:grid-cols-1 ">
      {
        properties.map(card => <Cards key={card.id} card={card}></Cards>)
      }
      
    </div>
  );
};

export default Properties;

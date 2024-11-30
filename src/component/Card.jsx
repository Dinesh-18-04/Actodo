import React from "react";

const Card = (props) => {
  return (
      <div style={{backgroundColor:props.bgcolor}} className=" text-center p-5 rounded-lg md:my-5 my-1 flex-grow">
        <p className="text-white font-bold">{props.title}</p>
        <p className="text-white font-bold ">{props.subtitle}</p>
      </div>
  );
};

export default Card;

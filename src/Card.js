import React from "react";

function Card({image, code}){

  return (
    <span>
      <img src={`${image}`} alt={`${code}`} />
    </span>

  )

}

export default Card;
import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props.cardPath} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-center">{props.cardTitle}</h5>
          <p className="card-text">{props.cardDescription}</p>
          <a href="#" className="btn btn-primary fs-4">
            More Info
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;

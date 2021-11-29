import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  const possibleRatings = [...Array(5).keys()];
  const fullStar = "fas fa-star";
  const halfStar = "fas fa-star-half-alt";

  return (
    <div className="rating">
      {possibleRatings.map((rating) => {
        const star = rating + 1;
        const isFull = star <= value;
        const isHalf = star - 0.5 === value;
        return (
          <i
            style={{ color }}
            key={star}
            className={`${isFull ? fullStar : ""} ${isHalf ? halfStar : ""}`}
          ></i>
        );
      })}
      <span> {text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.prototypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;

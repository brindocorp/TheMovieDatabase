import React, { useState, useEffect } from "react";
// import Link from "next/link";
import StarRatings from "react-star-ratings";
const StarComponent = ({ rate, size }) => {
  const [rating, setRating] = useState(0);

  const changeRating = (rating, name) => {
    setRating({ rating, name });
  };
  //   useEffect(props => {
  //     changeRating(2.43, "e");
  //   });

  return (
    <div>
      <span>
        <StarRatings
          rating={rate}
          starRatedColor="red"
          changeRating={changeRating}
          numberOfStars={5}
          name="rating"
          starDimension={size}
          starSpacing="5px"
        />
      </span>
      <style jsx>{``}</style>
    </div>
  );
};

export default StarComponent;

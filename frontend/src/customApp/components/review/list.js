import React from "react";
import Review from "../review/review";

const List = ({ entities }) => {
  const { reviews } = entities;
  return (
    <div>
      {reviews &&
        reviews.map((review, index) => {
          return <Review key={index} review={review} imageIndex={index} />;
        })}
    </div>
  );
};

export default List;

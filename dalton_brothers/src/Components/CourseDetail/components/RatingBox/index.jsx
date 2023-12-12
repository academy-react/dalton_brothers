import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const RatingBox = () => {
  const [rating, setRating] = useState(0);

  const changeRating = (newRating) => {
    setRating(newRating);
    // You can handle the rating change here
  };

  return (
    <div className='w-[400px] h-[200px] bg-mode-50 font-irSans rounded-2xl m-auto flex flex-col gap-5 justify-center items-center'>
      <p>ثبت امتیاز</p>
      <StarRatings
        rating={rating}
        starRatedColor="orange"
        changeRating={changeRating}
        numberOfStars={5}
        starDimension="30px"
        starSpacing="5px"
        starHoverColor="yellow"
        starEmptyColor="gray"
        halfStars
      />
      
    </div>
  );
};

export default RatingBox;
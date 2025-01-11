import { useState } from "react";

const StarRating = ({ totalStars = 5, rating, onRatingChange }) => {


  return (
    <div className="flex space-x-2 p-4">
      {[...Array(totalStars)].map((_, index) => (
        <svg
          key={index}
          onClick={() => onRatingChange(index + 1)} // Notify parent of the new rating
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 cursor-pointer ${
            index < rating ? "fill-yellow-500" : "fill-gray-500"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.194a1 1 0 00.95.69h4.418c.969 0 1.371 1.24.588 1.81l-3.584 2.6a1 1 0 00-.364 1.118l1.357 4.195c.3.921-.755 1.688-1.54 1.118l-3.585-2.6a1 1 0 00-1.176 0l-3.585 2.6c-.784.57-1.838-.197-1.54-1.118l1.357-4.195a1 1 0 00-.364-1.118l-3.584-2.6c-.783-.57-.38-1.81.588-1.81h4.418a1 1 0 00.95-.69l1.357-4.195z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;

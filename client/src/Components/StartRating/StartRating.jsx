import { FaStar, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const filledStars = Array(rating).fill(1);
  const emptyStars = Array(5 - rating).fill(1);

  return (
    <div className="flex">
      {filledStars.map((_, index) => (
        <FaStar key={index} className="text-yellow-500" />
      ))}
      {emptyStars.map((_, index) => (
        <FaRegStar key={index} className="text-gray-300" />
      ))}
    </div>
  );
};

export default StarRating;

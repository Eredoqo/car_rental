import { FaStar, FaRegStar } from "react-icons/fa";

type StarRatingProps = {
  rating: number;
};
const StarRating = ({ rating }: StarRatingProps) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i}>
        {i <= rating ? <FaStar color="green" /> : <FaRegStar color="grey" />}
      </span>
    );
  }
  return <div>rated: {stars}</div>;
};

export default StarRating;

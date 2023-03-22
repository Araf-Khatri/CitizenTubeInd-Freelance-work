import { FaQuoteRight } from "react-icons/fa";
import "./review.css";
import { AiFillStar } from "react-icons/ai";

const Review = ({ review, place, company, rating }) => {
  return (
    <div className="review">
      <div className="quoteIcon">
        <FaQuoteRight />
      </div>
      <div className="review-text">
        <p>{review}</p>
      </div>
      <div className="user">
        <p>{company}</p>
        <p>{place}</p>
      </div>
      <div className="stars">
        {new Array(rating).fill("").map((_, i) => (
          <AiFillStar key={i} />
        ))}
        {!!(5 - rating) &&
          new Array(5 - rating).fill("").map((_, i) => (
            <AiFillStar  className="gray-star" key={i} />
          ))}
      </div>
    </div>
  );
};

export default Review;

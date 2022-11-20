import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import {
  handleRatingStarsData,
  isIndented,
} from "../../../../src/lib/productUtils";

export default function StarRating({ rating, id }) {
  const starRating = handleRatingStarsData(rating);
  const arLen = starRating.rest < 0.2 ? starRating.base : starRating.base + 1;

  return (
    <div className="inline-flex text-mainBrown relative">
      {Array(arLen)
        .fill(null)
        .map((_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={
              i >= starRating.base && starRating.rest < 0.8
                ? faStarHalf
                : faStar
            }
            size="lg"
          />
        ))}
      <p
        className={`font-semibold ${isIndented(starRating.rest) ? "pl-2" : ""}`}
      >
        ({rating.rate})
      </p>
    </div>
  );
}

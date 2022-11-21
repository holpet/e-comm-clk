// Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faTruckFast,
  faArrowRight,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";

export default function CheckoutLogo() {
  return (
    <h1 className="my-5 font-bold text-2xl text-mainGray">
      My Cart{" "}
      <FontAwesomeIcon
        className="text-mainBrown"
        icon={faCartShopping}
        size="lg"
      />
      <FontAwesomeIcon
        className="text-mainLighterBrown mx-5"
        icon={faArrowRight}
        size="lg"
      />
      <span className="text-mainLighterGray">Pay&Go </span>
      <FontAwesomeIcon
        className="text-mainLighterBrown"
        icon={faTruckFast}
        size="lg"
      />
      <FontAwesomeIcon
        className="text-mainLighterBrown mx-5"
        icon={faArrowRight}
        size="lg"
      />
      <FontAwesomeIcon
        className="text-mainLighterGray"
        icon={faEllipsis}
        size="lg"
      />
    </h1>
  );
}

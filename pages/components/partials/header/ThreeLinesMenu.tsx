// Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function ThreeLinesMenu() {
  return (
    <div className="sm:hidden block mr-3">
      <FontAwesomeIcon className="text-mainGray" icon={faBars} size="lg" />
    </div>
  );
}

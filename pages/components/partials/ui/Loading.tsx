// Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <FontAwesomeIcon
        icon={faSpinner}
        size="8x"
        className="text-mainBrown"
        spin
      />
    </div>
  );
}

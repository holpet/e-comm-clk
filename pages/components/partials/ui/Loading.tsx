// Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading({ fullScreen, search }) {
  if (!search) {
    return (
      <div
        className={`${
          fullScreen
            ? "flex justify-center items-center h-screen"
            : "absolute m-0 top-[300px] sm:top-[400px] left-1/2 -translate-x-1/2 z-50"
        }`}
      >
        <FontAwesomeIcon
          icon={faSpinner}
          size="8x"
          className="text-mainBrown"
          spin
        />
      </div>
    );
  } else {
    return (
      <div className={``}>
        <FontAwesomeIcon
          icon={faSpinner}
          size="lg"
          className="text-mainDarkerGray"
          spin
        />
      </div>
    );
  }
}

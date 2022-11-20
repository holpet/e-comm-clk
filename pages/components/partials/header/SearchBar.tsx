import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../styles/Header.module.css";

export default function SearchBar() {
  return (
    <div className="sm:flex flex-grow hidden flex-row items-center border-2 border-mainLighterGray rounded-3xl p-1 w-min mx-5 focus-within:bg-mainWhiteGray focus-within:border-mainBrown">
      <FontAwesomeIcon
        className="px-2 text-mainGray"
        icon={faMagnifyingGlass}
        size="lg"
      />
      <input
        className={`${styles.searchbarInput} outline-none w-full p-2 text-mainBlackGray focus:bg-mainWhiteGray`}
        type="text"
        placeholder="What are you looking for?"
      />
    </div>
  );
}

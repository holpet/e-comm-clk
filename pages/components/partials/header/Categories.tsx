import Link from "next/link";
import { CATEGORY } from "../../../../src/lib/constants";
import { getPathFromCategory } from "../../../../src/lib/urlUtils";

// styles
import styles from "../../../../styles/Header.module.css";

export default function Categories() {
  return (
    <div className="hidden sm:inline-block">
      <div className={`${styles.dropdown}`}>
        <span className="secondaryLink bg-mainBlackGray rounded-full border-2 border-mainBrown font-bold p-4">
          categories
        </span>
        <div
          className={`${styles.dropdownContent} rounded-xl backdrop-blur-sm backdrop-grayscale bg-white bg-opacity-60 backdrop-brightness-110`}
        >
          {Object.values(CATEGORY).map((category, i) => (
            <Link
              key={i}
              href={getPathFromCategory(category)}
              className="dropDownButton"
            >
              <span className="px-4 whitespace-nowrap">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

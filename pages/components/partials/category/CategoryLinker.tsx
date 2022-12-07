import { useRouter } from "next/router";
import { CATEGORY } from "../../../../src/lib/constants";

// Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faPlug,
  faVenus,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import { getPathFromCategory } from "../../../../src/lib/urlUtils";

const getIcon = (category: string) => {
  switch (category) {
    case CATEGORY.JEWELERY:
      return faGem;
    case CATEGORY.ELECTRO:
      return faPlug;
    case CATEGORY.WOMEN_CLOTHING:
      return faVenus;
    case CATEGORY.MEN_CLOTHING:
      return faMars;
    default:
      return faGem;
  }
};

export default function CategoryLinker() {
  const router = useRouter();
  return (
    <div className="text-mainDarkGray grid sm:grid-cols-4 grid-cols-2 gap-2 mt-7">
      {Object.values(CATEGORY).map((category, i) => (
        <div
          style={{
            backgroundImage: `url('promo/category/${i}_compressed.webp')`,
            backgroundSize: "cover",
          }}
          key={category}
          className={`categoryButton aspect-square flex flex-col items-center justify-center text-center p-5 m-2`}
          onClick={() => router.push(`${getPathFromCategory(category)}`)}
        >
          <div
            className={`catLinker w-full h-full flex flex-col items-center justify-center text-center backdrop-blur-sm backdrop-grayscale backdrop-brightness-110 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-75`}
          >
            <div className="m-1">{category}</div>
            <div className={`catIcon m-1`}>
              <FontAwesomeIcon
                className="text-mainBlackGray"
                icon={getIcon(category)}
                size="3x"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

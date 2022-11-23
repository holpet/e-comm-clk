// other
import { CATEGORY } from "../../../../src/lib/constants";
import Router from "next/router";

// styles
import styles from "../../../../styles/Header.module.css";

export default function Categories({ products }) {
  function getProductsByCategory(category: string) {
    return products.filter((product) => {
      return product.category === category.toLowerCase();
    });
  }

  function handleOnClick(category: string) {
    const products = getProductsByCategory(category);
    Router.push("/category/jewelery");
  }

  return (
    <div className={styles.dropdown}>
      <span className="secondaryLink bg-mainBlackGray font-bold py-7 px-4">
        categories
      </span>
      <div
        className={`rounded-xl backdrop-blur-sm backdrop-grayscale bg-white bg-opacity-60 backdrop-brightness-110 ${styles.dropdownContent}`}
      >
        {Object.values(CATEGORY).map((category, i) => (
          <div key={i} className="dropDownButton">
            <span
              className="px-4"
              onClick={() => {
                handleOnClick(category);
              }}
            >
              {category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

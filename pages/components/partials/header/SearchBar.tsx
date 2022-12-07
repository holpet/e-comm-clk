import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../styles/Header.module.css";
import { useState } from "react";
import { fetchQueriedProducts } from "../../../../src/fetchers/products";
import { getPathFromId } from "../../../../src/lib/urlUtils";
import Link from "next/link";
import Loading from "../ui/Loading";

export default function SearchBar() {
  const [localQuery, setLocalQuery] = useState("");
  const [results, setResults] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value;
    setResults(undefined);
    setLocalQuery(q);
    if (q.length > 2) {
      fetchQueriedProducts(q).then((foundProducts) => {
        if (foundProducts === undefined) setResults(null);
        else if (foundProducts.length === 0) setResults(null);
        else setResults(foundProducts);
      });
    }
  }

  function handleOnClick() {
    setResults(null);
    setLocalQuery("");
  }

  return (
    <div
      className={`${styles.dropdownSearch} sm:flex flex-grow hidden flex-col justify-center items-center w-min p-1 mx-5`}
    >
      <div className="sm:flex flex-grow hidden flex-row items-center border-2 border-mainLighterGray rounded-3xl w-full focus-within:bg-mainWhiteGray focus-within:border-mainBrown">
        <FontAwesomeIcon
          className="px-2 text-mainGray"
          icon={faMagnifyingGlass}
          size="lg"
        />
        <div className="flex flex-col w-full">
          <input
            className={`${styles.searchbarInput} outline-none w-full p-2 text-mainBlackGray focus:bg-mainWhiteGray`}
            type="text"
            placeholder="What are you looking for?"
            value={localQuery}
            onChange={handleOnChange}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
          />
        </div>
      </div>
      <div
        className={`${
          styles.dropdownContentSearch
        } bg-mainWhiteGray p-4 mt-1 mr-5 w-full ${
          localQuery.length > 2 && isFocused ? "!opacity-100" : "!opacity-0"
        }`}
      >
        {/* >>>>> DROPDOWN MATCHES <<<<< */}
        {results === undefined && <Loading fullScreen={false} search={true} />}
        {results === null && <div>No matches found.</div>}
        {results !== null &&
          results !== undefined &&
          results.map((product) => (
            <Link
              key={product.id}
              className={"mainLink block"}
              href={getPathFromId(product.category, product.title, product.id)}
              onClick={handleOnClick}
            >
              {product.title}
            </Link>
          ))}
      </div>
    </div>
  );
}

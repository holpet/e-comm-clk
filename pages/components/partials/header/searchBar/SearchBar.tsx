import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../../styles/Header.module.css";
import { useState } from "react";
import { getPathFromId } from "../../../../../src/lib/urlUtils";
import Link from "next/link";
import Loading from "../../ui/Loading";
import { IProduct } from "../../../../../src/lib/interfaces";
import SearchInput from "./SearchInput";

export default function SearchBar() {
  const [localQuery, setLocalQuery] = useState<string>("");
  const [results, setResults] = useState<IProduct[]>(null);
  const [isLoadingResults, setIsLoadingResults] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);

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
          <SearchInput
            queryVal={localQuery}
            handleQuery={setLocalQuery}
            handleResults={setResults}
            handleFocus={setIsFocused}
            handleLoading={setIsLoadingResults}
          />
        </div>
      </div>
      {/* ----------------- DROPDOWN CONTENT ----------------- */}
      <div
        className={`${
          styles.dropdownContentSearch
        } bg-mainWhiteGray p-4 mt-1 mr-5 w-full ${
          localQuery.length > 2 && isFocused ? "!opacity-100" : "!opacity-0"
        }`}
      >
        {/* >>>>> DROPDOWN MATCHES <<<<< */}
        {isLoadingResults && <Loading fullScreen={false} search={true} />}
        {!isLoadingResults && results === null && <div>No matches found.</div>}
        {!isLoadingResults &&
          results !== null &&
          results.map((product: IProduct) => (
            <Link
              key={product.id}
              className={"mainLink block"}
              href={getPathFromId(product.category, product.title, product.id)}
              onClick={() => {
                setResults(null);
                setLocalQuery("");
              }}
            >
              {product.title}
            </Link>
          ))}
      </div>
    </div>
  );
}

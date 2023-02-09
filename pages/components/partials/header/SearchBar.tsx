import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../../../../styles/Header.module.css";
import { useEffect, useState } from "react";
import { fetchQueriedProducts } from "../../../../src/fetchers/products";
import { getPathFromId } from "../../../../src/lib/urlUtils";
import Link from "next/link";
import Loading from "../ui/Loading";
import { IProduct } from "../../../../src/lib/interfaces";

// slow down data fetching of query on onChange input
function useDebounceValue(value: string, time = 250) {
  const [debounceValue, setDebounceValue] = useState<string>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, time);
    return () => clearTimeout(timeout);
  }, [value, time]);

  return debounceValue;
}

export default function SearchBar() {
  const [localQuery, setLocalQuery] = useState<string>("");
  const debounceQuery = useDebounceValue(localQuery);
  const [results, setResults] = useState<IProduct[]>(null);
  const [isLoadingResults, setIsLoadingResults] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [resultCache, setResultCache] = useState<{
    [query: string]: IProduct[];
  }>({});

  useEffect(() => {
    let ignore = false;
    setIsLoadingResults(true);
    if (debounceQuery.length > 2) {
      fetchQueriedProducts(debounceQuery, resultCache).then((foundProducts) => {
        if (!ignore) {
          if (foundProducts === undefined) setResults(null);
          else if (foundProducts.length === 0) setResults(null);
          else {
            setResults(foundProducts);
            setResultCache({ ...resultCache, [debounceQuery]: foundProducts });
          }
        }
        setIsLoadingResults(false);
      });
    }
    return () => {
      ignore = true;
    };
  }, [debounceQuery]);

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
            onChange={(e) => {
              setLocalQuery(e.target.value);
            }}
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
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

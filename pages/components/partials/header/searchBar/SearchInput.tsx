import React, { useEffect, useState } from "react";
import styles from "../../../../../styles/Header.module.css";
import { fetchQueriedProducts } from "../../../../../src/fetchers/products";
import { IProduct } from "../../../../../src/lib/interfaces";

interface props {
  handleResults: React.Dispatch<React.SetStateAction<IProduct[]>>;
  handleFocus: React.Dispatch<React.SetStateAction<boolean>>;
  handleLoading: React.Dispatch<React.SetStateAction<boolean>>;
  handleQuery: React.Dispatch<React.SetStateAction<string>>;
  queryVal: string;
}

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

const SearchInput = ({
  handleResults,
  handleFocus,
  handleLoading,
  handleQuery,
  queryVal,
}: props) => {
  const debounceQuery = useDebounceValue(queryVal);
  const [resultCache, setResultCache] = useState<{
    [query: string]: IProduct[];
  }>({});

  useEffect(() => {
    if (debounceQuery.length < 2) return;
    let ignore = false;
    handleLoading(true);
    fetchQueriedProducts(debounceQuery, resultCache).then((foundProducts) => {
      if (!ignore) {
        if (foundProducts.length === 0) handleResults(null);
        else {
          handleResults(foundProducts);
          setResultCache({ ...resultCache, [debounceQuery]: foundProducts });
        }
      }
      handleLoading(false);
    });
    return () => {
      ignore = true;
    };
  }, [debounceQuery]);

  return (
    <input
      className={`${styles.searchbarInput} outline-none w-full p-2 text-mainBlackGray focus:bg-mainWhiteGray`}
      type="text"
      placeholder="What are you looking for?"
      value={queryVal}
      onChange={(e) => {
        handleQuery(e.target.value);
      }}
      onBlur={() => handleFocus(false)}
      onFocus={() => handleFocus(true)}
    />
  );
};

export default SearchInput;

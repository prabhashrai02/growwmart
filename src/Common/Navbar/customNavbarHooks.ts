import { setProductList, updateSearchValue } from "@/Store/slices/productSlice";
import { extractString } from "@/utils/functions";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export const useNavbar = () => {

  const { push, query } = useRouter();
  const { sort, selectCategories, priceFilter, value } = query;
  const updatedPrice = Number(priceFilter) ? Number(priceFilter) : 1000;

  const dispatch = useDispatch();

  const timeoutRef = useRef<NodeJS.Timeout>();

  const [searchValue, setSearchValue] = useState<string>(extractString(value));
  const cartURL = `../cart`;

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setProductList([]));

    const inputValue = event.currentTarget.value;
    setSearchValue(inputValue);
    push({
      query: { ...query, value: inputValue, sort: sort, selectCategories: selectCategories, priceFilter: updatedPrice },
      pathname: "/search",
    });
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(() => dispatch(updateSearchValue(searchValue)), 1000)
    return () => clearTimeout(timeoutRef.current);
  }, [searchValue])

  return {
    searchValue,
    cartURL,
    handleChangeInput
  }
}
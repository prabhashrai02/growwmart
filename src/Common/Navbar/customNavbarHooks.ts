import { updateSearchValue } from "@/Store/slices/productSlice";
import { RootState } from "@/Store/store";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const useNavbar = () => {

  const { push, query } = useRouter();
  const { sort, selectCategories, priceFilter } = query;
  const updatedPrice = Number(priceFilter) ? Number(priceFilter) : 1000;

  const searchQuery = useSelector((state: RootState) => state.product.searchValue);
  const dispatch = useDispatch();

  const timeoutRef = useRef<NodeJS.Timeout>();

  const [searchValue, setSearchValue] = useState<string>(searchQuery);
  const cartURL = `../cart`;

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    setSearchValue(inputValue);
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(() => 
    {
      push({
        query: { ...query, value: searchValue, sort: sort, selectCategories: selectCategories, priceFilter: updatedPrice },
        pathname: "/search",
      });
      dispatch(updateSearchValue(searchValue))
    }, 1000)
    return () => clearTimeout(timeoutRef.current);
  }, [searchValue])

  return {
    searchValue,
    cartURL,
    handleChangeInput
  }
}
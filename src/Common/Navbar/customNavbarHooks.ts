import { updateSearchValue } from "@/Store/slices/productSlice";
import { RootState } from "@/Store/store";
import { useRouter } from "next/router";
import { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const useNavbar = () => {
  
    const searchQuery = useSelector((state: RootState) => state.product.searchValue);
    const dispatch = useDispatch();
    const { query } = useRouter();
  
    const timeoutRef = useRef<NodeJS.Timeout>();
  
    useEffect(() => {
      query.value && setSearchValue(query.value.toString());
    }, [query, searchQuery])
    
    const [searchValue, setSearchValue] = useState<string>(searchQuery);
  
    const cartURL = `../cart`;
  
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.currentTarget.value);
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
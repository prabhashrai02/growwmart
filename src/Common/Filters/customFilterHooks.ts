import { setCategoriesList, setProductList, updateSearchValue } from "@/Store/slices/productSlice";
import { RootState } from "@/Store/store";
import { capitalizeFirstChar, extractData } from "@/utils/functions";
import router, { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PrefetchedData, QueryData } from "./Types";

export const useFilters = () => {

  const categoriesState = useSelector((state: RootState) => state.product.categories);
  const [categories, setCategories] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(1000);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${process.env.BASE_URL}/api/products/categories`);
      const data: string[] = await response.json();

      const showCategories = data.map((item: string) => {
        return capitalizeFirstChar(item);
      });

      setCategories(showCategories);
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    try {
      categoriesState.length ?
        setCategories(categoriesState)
        :
        fetchCategories();
    }
    catch (e) {
      console.log(e)
    }
  }, []);

  return {
    categories,
    price,
    setPrice
  }
}

export const useSyncFilter = () => {

  const { categories, price, setPrice } = useFilters();
  const dispatch = useDispatch();
  const { query } = useRouter();

  const [prefetchedData, setPrefetchedData] = useState<PrefetchedData>();

  const searchValue = useSelector((state: RootState) => state.product.searchValue);
  
  // set filter data from url
  useEffect(() => {
    const { value, sort, selectCategories, priceFilter } = query;
    const extractedValues: QueryData = {
      value: value,
      sort: sort,
      selectCategories: selectCategories,
      priceFilter: priceFilter,
    }
    const { sortBy, filterCategory, urlPrice } = extractData(extractedValues);
    setPrice(urlPrice);
    
    const urlData: PrefetchedData = {
      sort: sortBy,
      filterCategories: filterCategory,
    }

    setPrefetchedData(urlData);
  }, [query])

  useEffect(() => {
    categories && dispatch(setCategoriesList(categories));
  }, [categories])

  const skeletonArray = [1, 2, 3, 4];


  const takeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    value && setPrice(value * 10);
  }

  const resetFilter = () => {
    dispatch(setProductList([]));
    dispatch(updateSearchValue(''));
    router.push(`search?value=&sort=&selectCategories=&priceFilter=${1000}`);
  }

  const filterChanges = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(setProductList([]));
    const target = new FormData(event.currentTarget);

    const filterCategory: Set<FormDataEntryValue> = new Set(target.getAll('category'));
    const sort = String(target.get('sort'));

    const categoriesFilter = JSON.stringify([...filterCategory].join(','));
    const urlFilter = categoriesFilter.substring(1, categoriesFilter.length - 1);

    router.push(`search?value=${searchValue}&sort=${sort}&selectCategories=${urlFilter}&priceFilter=${price}`);
  }

  return {
    categories,
    price,
    filterChanges,
    resetFilter,
    skeletonArray,
    takeValue,
    prefetchedData
  }
}

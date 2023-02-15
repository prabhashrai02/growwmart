import router, { useRouter } from "next/router";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/Store/store";
import { capitalizeFirstChar, extractData } from "@/utils/functions";
import { setCategoriesList, setProductList, updateSearchValue } from "@/Store/slices/productSlice";

import { PrefetchedData, QueryData } from "./Types";

import style from './Filters.module.css';

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
    setPrice,
  }
}

export const useSyncFilter = () => {

  const { categories, price, setPrice } = useFilters();

  const dispatch = useDispatch();
  const { query, pathname } = useRouter();

  const [prefetchedData, setPrefetchedData] = useState<PrefetchedData>({sort:"", filterCategories: new Set()});

  const searchValue = useSelector((state: RootState) => state.product.searchValue);

  const [usedFilter, setUsedFilter] = useState(false);

  const [styleMenu, setStyleMenu] = useState(`${style.filter63HideMenu}`);
  const [menuHidden, setMenuHidden] = useState(true);
  const [searchSort, setSearchSort] = useState("");
  const [urlFilter, setURLFilter] = useState("");

  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleHamburger = () => {
    if (styleMenu === `${style.filter63HideMenu}`) {
      setStyleMenu(`${style.filter63ShowMenu}`);
      setMenuHidden(false);
    }
    else {
      setStyleMenu(`${style.filter63HideMenu}`);
      setMenuHidden(true);
    }
  }

  const { value, sort, selectCategories, priceFilter } = query;
  const extractedValues: QueryData = {
    value: value,
    sort: sort,
    selectCategories: selectCategories,
    priceFilter: priceFilter,
  }

  useEffect(() => {
    if (usedFilter) {
      timeoutRef.current = setTimeout(() => searchProducts(), 1000)
    }

    return () => clearTimeout(timeoutRef.current);
  }, [price, searchSort, urlFilter])

  // set filter data from url when query changes
  useEffect(() => {
    const { sortBy, filterCategory, urlPrice } = extractData(extractedValues);
    setPrice(urlPrice);

    const urlData: PrefetchedData = {
      sort: sortBy,
      filterCategories: filterCategory,
    }

    setPrefetchedData(urlData);

    setStyleMenu(`${style.filter63HideMenu}`);
    setMenuHidden(true);
  }, [query])

  useEffect(() => {
    categories && dispatch(setCategoriesList(categories));
  }, [categories])

  const skeletonArray = [1, 2, 3, 4];

  // take value from price range
  const takeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    value && setPrice(value * 10)
  }

  const resetFilter = () => {
    const searched = value || sort || selectCategories || (priceFilter !== "1000");

    if (searched && (pathname === "/search")) {
      dispatch(setProductList([]));
      dispatch(updateSearchValue(''));
      router.push(`search?value=&sort=&selectCategories=&priceFilter=${1000}`);
    }
    else {
      return;
    }
  }

  const filterChanges = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUsedFilter(true);
    dispatch(setProductList([]));
    const target = new FormData(event.currentTarget);

    const filterCategory: Set<FormDataEntryValue> = new Set(target.getAll('category'));
    const sort = String(target.get('sort'));

    const categoriesFilter = JSON.stringify([...filterCategory].join(','));
    const urlFilter = categoriesFilter.substring(1, categoriesFilter.length - 1);

    setSearchSort(sort);
    setURLFilter(urlFilter);
  }

  const searchProducts = () => {
    router.push(`search?value=${searchValue}&sort=${searchSort}&selectCategories=${urlFilter}&priceFilter=${price}`);
  }

  return {
    categories,
    price,
    filterChanges,
    resetFilter,
    skeletonArray,
    takeValue,
    prefetchedData,
    menuHidden,
    styleMenu,
    handleHamburger
  }
}

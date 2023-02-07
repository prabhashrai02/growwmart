import { setCategoriesList, updateSearchValue } from "@/Store/slices/productSlice";
import { RootState } from "@/Store/store";
import router from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useFilters = () => {

  const [categories, setCategories] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(1000);

  const fetchCategories = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    try {
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
  const searchValue = useSelector((state: RootState) => state.product.searchValue);

  useEffect(() => {
    categories && dispatch(setCategoriesList(categories));
  }, [categories])

  const skeletonArray = [1, 2, 3, 4];


  const takeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    value && setPrice(value * 10);
  }

  const resetFilter = () => {
    dispatch(updateSearchValue(''));
    router.push(`search?value=&sort=&selectCategories=&priceFilter=${1000}`);
  }

  const filterChanges = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

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
    takeValue
  }
}
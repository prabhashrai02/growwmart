import { setCategoriesList, updateShowList, updateSearchValue } from "@/Store/slices/productSlice";
import { RootState } from "@/Store/store";
import router from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterData } from "./Types";

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

  useEffect(() => {
    categories && dispatch(setCategoriesList(categories));
  }, [categories])

  const { value, sort, selectCategories, priceFilter } = router.query;

  const [searchValue, setSearchValue] = useState<string>('');
  const [sortValue, setSortValue] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<Set<FormDataEntryValue>>();


  const skeletonArray = [1, 2, 3, 4];

  const searchQuery = useSelector((state: RootState) => state.product.searchValue);

  useEffect(() => {
    setSearchValue(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    const searchValueLength = value ? value.length : 0;
    value && setSearchValue(JSON.stringify(value).substring(1, 1 + searchValueLength));

    const sortLength = sort ? sort.length : 0;
    const sortBy = sort ? JSON.stringify(sort).substring(1, 1 + sortLength) : '';

    const categories = JSON.stringify(selectCategories);
    const catArray = categories && categories.substring(1, categories.length - 1).split(',').filter((ele) => ele);
    const filterCategory: Set<FormDataEntryValue> = categories ? new Set([...catArray]) : new Set();
    const urlPrice = Number(priceFilter);

    setSortValue(sortBy);
    urlPrice ? setPrice(urlPrice) : setPrice(1000);
    setSelectedCategories(filterCategory);

  }, [router.query])

  useEffect(() => {
    const filter: FilterData = {
      sort: sortValue,
      selectCategory: selectedCategories,
      priceFilter: price,
      searchValue: searchValue
    }

    dispatch(updateShowList(filter));

  }, [price, selectedCategories, searchValue, sortValue])

  const takeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    value && setPrice(value * 10);
  }

  const resetFilter = () => {

    const filterCategory: Set<FormDataEntryValue> = new Set();

    const sort = '';

    setPrice(1000);

    const filter: FilterData = {
      priceFilter: 1000,
      sort: sort,
      selectCategory: filterCategory,
      searchValue: searchValue,
    }

    dispatch(updateSearchValue(''));
    dispatch(updateShowList(filter));


    router.push(`search?value=&sort=${sort}&selectCategories=&priceFilter=${1000}`);
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
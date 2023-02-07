import { getLocalData, setLocalData } from "@/utils/useLocalStorage";
import { useState, useEffect } from "react";
import { Product } from "@/UI/ProductPage/Types";

export const useProductArray = () => {
    const [productArray, setProductArray] = useState<Product[]>([]);
  
    const fetchAllData = async () => {
      const preFetchedData = (getLocalData("allproducts"));
      const oldData = preFetchedData ? JSON.parse(preFetchedData) : "";
  
      if (preFetchedData) {
        setProductArray(oldData);
      }
      else {
        const result = await fetch('https://fakestoreapi.com/products/')
        const data = await result.json();
        setProductArray(data);
        setLocalData<Product[]>("allproducts", data);
      }
  
    }
  
    useEffect(() => {
      fetchAllData();
    }, []);
  
    return {
      productArray,
    }
  }
  
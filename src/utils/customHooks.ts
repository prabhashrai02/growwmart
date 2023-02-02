import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Product } from "@/UI/ProductPage/Types";
import { getLocalData, setLocalData } from "./useLocalStorage";

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


export const useProduct = () => {

  const router = useRouter();
  const productId = Number(router.query.productId);

  const [product, setProduct] = useState<Product | undefined>();

  const fetchProduct = async (productId: number) => {
    const result = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await result.json();

    setProduct(data);
  }

  useEffect(() => {
    if (productId && productId < 21) {
      fetchProduct(productId);
    }
  }, [productId])

  return {
    product,
  };
}

export const useFilters = () => {

  const [categories, setCategories] = useState<string[]>([]);
  const [price, setPrice] = useState<number>(200);

  const fetchCategories = async () => {
    try {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    setCategories(data);
    }
    catch(e){
      console.log(e)
    } 
  }

  useEffect(() => {
    try {
      fetchCategories();
    }
    catch(e){
      console.log(e)
    } 
  }, []);

  return {
    categories,
    price,
    setPrice
  }
}

import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Product } from "./Types";

export const useProductArray = () => {

  const [productArray, setProductArray] = useState<Product[]>([]);
  
  const fetchAllData = async () => {
    const result = await fetch('https://fakestoreapi.com/products/')
    const data = await result.json();

    setProductArray(data);
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
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    setCategories(data);
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return {
    categories,
    price,
    setPrice
  }
}

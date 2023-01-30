import { useState, useEffect } from "react";
import { Product } from '@/utils/Types';

export const useFilters = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [price, setPrice] = useState<number>(200);
  
    const fetchCategories = async () => {    
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();
      setCategories(data);
    }
  
    useEffect(() => {
      fetchCategories()
    }, []);
  
    return {
      categories,
      price,
      setPrice
    }
  }

export const getProduct = (productId: number) => {

    const [product, setProduct] = useState<Product | undefined>();
  
    const fetchProduct = async (productId: number) => {
      const result = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await result.json();
      setProduct(data);
    }
  
    useEffect(() => {
      fetchProduct(productId);
    }, []);
  
    return product;
  }
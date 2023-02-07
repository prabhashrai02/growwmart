import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Product } from "./Types";

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
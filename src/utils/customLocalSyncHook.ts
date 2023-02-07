import { useEffect } from "react";
import { Product } from "@/UI/ProductPage/Types";
import { getLocalData, setLocalData } from "./useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Store/store";
import { CartState, WishState } from "@/Store/slices/Types";
import { setDataFromLocal } from "@/Store/slices/cartSlice";
import { setWishList } from "@/Store/slices/wishSlice";

export const useLocalData = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart);
  const wish: WishState = useSelector((state: RootState) => state.wish);
  const cartSize = cart.cartProducts.length;

  const localCartData = getLocalData("cartState");
  const localWishList = getLocalData("wishList");

  useEffect(() => {
    localCartData ? dispatch(setDataFromLocal(JSON.parse(localCartData))) :
      setLocalData<CartState>("cartState", cart)

    localWishList ? dispatch(setWishList(JSON.parse(localWishList))) :
      setLocalData<Product[]>("wishList", wish.wishList)
  }, []);

  useEffect(() => {
    setLocalData<CartState>("cartState", cart)
    setLocalData<Product[]>("wishList", wish.wishList)

  }, [cart])

  useEffect(() => {
    setLocalData<Product[]>("wishList", wish.wishList)

  }, [wish])

  return {
    cartSize,
  }
}



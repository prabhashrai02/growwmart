import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateWishList } from "@/Store/slices/wishSlice";
import { RootState } from "@/Store/store";
import { Product } from "@/UI/ProductPage/Types";

export const useBookmark = (data: Product) => {
    const wishList = useSelector((state: RootState) => state.wish.wishList);
    const dispatch = useDispatch();
    const [bookmark, setBookmark] = useState("#000000");
  
    useEffect(() => {
      wishList.forEach((item) => {
        if (item.id === data.id) {
          setBookmark("#c24443");
        }
      })
    }, []);
  
    const updateBookmark = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      event.preventDefault();
  
      if (bookmark === "#c24443") {
        setBookmark("#000000")
      }
      else {
        setBookmark("#c24443")
      }
  
      dispatch(updateWishList(data));
    }

    return {
        bookmark,
        updateBookmark
    }
  }
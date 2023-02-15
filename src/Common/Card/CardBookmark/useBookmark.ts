import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateWishList } from "@/Store/slices/wishSlice";
import { RootState } from "@/Store/store";
import { Product } from "@/UI/ProductPage/Types";
import { toast } from "react-toastify";

export const useBookmark = (data: Product) => {
    const wishList = useSelector((state: RootState) => state.wish.wishList);
    const dispatch = useDispatch();
    const [bookmark, setBookmark] = useState("#dcdada");
  
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
        setBookmark("#dcdada");
        toast(`Removed ${data.title} from Wishlist.`);
      }
      else {
        setBookmark("#c24443");
        toast(`Added ${data.title} to Wishlist.`);
      }
  
      dispatch(updateWishList(data));
    }

    return {
        bookmark,
        updateBookmark
    }
  }
import { useDispatch } from "react-redux";

import { addToCart } from "@/Store/slices/cartSlice";
import { updateWishList } from "@/Store/slices/wishSlice";
import { Product } from "@/UI/ProductPage/Types";

export const useWishButtons = (data: Product) => {

    const dispatch = useDispatch();
    
    const preventDefault = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
    }
    
    const handleClick = () => {
        dispatch(addToCart(data));
        dispatch(updateWishList(data));
    }

    return {
        preventDefault,
        handleClick
    }
}
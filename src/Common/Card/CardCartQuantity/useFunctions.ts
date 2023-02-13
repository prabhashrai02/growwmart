import { useDispatch } from "react-redux";

import { addToCart, decreaseQuantity, removeItem } from "@/Store/slices/cartSlice";
import { Product } from "@/UI/ProductPage/Types";

export const useFunctions = (quantity: number | undefined, data: Product) => {

    const dispatch = useDispatch();
    
    const handelClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
    }
    
    const handleAdd = () => {
        dispatch(addToCart(data));
    }
    
    const handleRemove = () => {
        if (quantity && quantity > 1) dispatch(decreaseQuantity(data));
        else dispatch(removeItem(data));
    }

    return {
        handelClick,
        handleAdd,
        handleRemove
    }
}


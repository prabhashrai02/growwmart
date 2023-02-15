import { useDispatch } from "react-redux";

import { addToCart, decreaseQuantity, removeItem } from "@/Store/slices/cartSlice";
import { Product } from "@/UI/ProductPage/Types";
import { toast } from "react-toastify";

export const useFunctions = (quantity: number | undefined, data: Product) => {

    const dispatch = useDispatch();

    const handelClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
    }

    const handleAdd = () => {
        dispatch(addToCart(data));


        toast(`Added 1 ${data.title} to Cart.`);
    }

    const handleDecrease = () => {
        if (quantity && quantity > 1) {
            dispatch(decreaseQuantity(data));
            toast(`Removed 1 ${data.title} from Cart.`);
        }
        else {
            dispatch(removeItem(data));
            toast(`Removed ${data.title} from Cart.`);
        }
    }

    const handleRemove = () => {
        dispatch(removeItem(data));
        toast(`Removed ${data.title} from Cart.`);
    }

    return {
        handelClick,
        handleAdd,
        handleDecrease,
        handleRemove
    }
}


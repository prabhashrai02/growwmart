import { addGivenQuantity } from "@/Store/slices/cartSlice";
import { AddGivenQuantity } from "@/Store/slices/Types";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CardButtonProps } from "./Types";

export const useCardButtons = (props: CardButtonProps) => {

    const dispatch = useDispatch();
    const router = useRouter();

    const [quantity, setQuantity] = useState(1);
    const { check, data } = props;

    const handleQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredNumber = Number(event.currentTarget.value);

        if (Number.isNaN(enteredNumber)) return;
        if (enteredNumber <= 0) {
            setQuantity(1);
        }
        else {
            setQuantity(enteredNumber);
        }
    }

    const handelClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
    }

    const addQuantity = () => {
        const addGiven: AddGivenQuantity = {
            product: data,
            quantity: quantity
        };

        dispatch(addGivenQuantity(addGiven));
    }

    const buyNow = () => {
        const addGiven: AddGivenQuantity = {
            product: data,
            quantity: quantity
        };

        const cartURL = '../cart';
        router.push(cartURL)
        return dispatch(addGivenQuantity(addGiven));
    }

    return {
        check,
        quantity,
        handleQuantity,
        handelClick,
        addQuantity,
        buyNow
    }
}
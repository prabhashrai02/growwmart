import { CartList } from "@/UI/CartPage/Types";

export const findItemInCart = (cartProducts: CartList[], id: number) => {
    const item = cartProducts.find(item => item.product.id === id);
    return item;
}
export type EllipsisProps = {
    text: string;
    size?: number;
}

export type CardProps = {
    data?: Product;
    cartData?: CartDetails;
    productPage?: boolean;
    cartPage?: boolean;
}

export type ButtonProps = {
    value: string;
    className: string; 
    function?: Function;  
}

export type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: rating;
    title: string;
}

export type rating = {
    count: number;
    rate: number;
}

export type CartDetails = {
    date: string;
    id: number;
    products: CartProduct;
    userId: number;
    _v: number;
}

export type CartProduct = {
    productId: number;
    quantity: number;
}
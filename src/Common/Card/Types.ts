export type CardProps = {
    data?: Product,
    cartData?: boolean,
    productPage?: boolean,
    cartPage?: boolean,
}

export type Product = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: Rating,
    title: string,
}

export type Rating = {
    count: number,
    rate: number,
}
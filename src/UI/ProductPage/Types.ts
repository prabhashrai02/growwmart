export type ProductPageProp = {
    product: Product,
}

export type Product = {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: Rating,
    title: string,
    blurhash: string,
}

export type Rating = {
    count: number,
    rate: number,
}
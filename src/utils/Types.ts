export type EllipsisProps = {
    text: string;
    size?: number;
}

export type CardProps = {
    data: Product;
    showDescription?: boolean;
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
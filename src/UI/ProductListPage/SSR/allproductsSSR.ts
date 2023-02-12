import { Product } from "@/UI/ProductPage/Types";
import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<{ data: Product[] }> = async () => {
    try {
        const result = await fetch(`${process.env.BASE_URL}/api/products/`)
        const data: Product[] = await result.json();

        return {
            props: {
                data,
            },
        }
    }
    catch (e) {
        return {
            notFound: true
        };
    }
}
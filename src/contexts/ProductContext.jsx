import { createContext, useContext } from "react";

export const ProductContext = createContext(null);

export function useProductContext () {
    const product = useContext(ProductContext);

    if (!product) throw new Error("No product defined in ProductContext!!");

    return product;
}
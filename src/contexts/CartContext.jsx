import { createContext, useContext, useReducer } from "react";
import {cart} from "../data.json"
import {getItemsFromStorage} from "./useLocalStorage"

const CartContext = createContext(null);

const cartItemsFromStorage = getItemsFromStorage();

export function useCartContext () {
    const cart = useContext(CartContext);

    if (!cart) throw new Error("Nothing defined in CartContext!!");

    return cart;
}

function cartReducerFn (oldCartState, action) {
    const {type} = action;

    switch (type) {
        case "add_to_cart" : {
            const {itemId, amount} = action;
            const newCartItem = {
                "productId": "1",
                "productName": "Fall Limited Edition Sneakers",
                "productDescription": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
                "price": {
                    "currentPrice": "125.00",
                    "oldPrice": "250.00",
                    "discount": "50"
                },
                "quantityChosen": amount,
                "image": "image-product-1.jpg"
            }

            const itemInCart = oldCartState.find(cartItem => cartItem.productId === itemId);

            if (!itemInCart) {
                return [
                    ...oldCartState,
                    newCartItem
                ]
            } else {
                return oldCartState.map(cartItem => {
                    if (cartItem.productId === itemId) {
                        return {
                            ...itemInCart,
                            quantityChosen: cartItem.quantityChosen + amount
                        };
                    } else {
                        return cartItem
                    }
                });
            }

        }
        case "remove_from_cart" : {
            const {itemId} = action;

            return oldCartState.filter(cartItem => cartItem.productId !== itemId);
        }
        default:
            break;
    }
}

export function CartContextProvider ({children}) {
    const [cartState, cartDispatch] = useReducer(cartReducerFn, cartItemsFromStorage !== undefined ? cartItemsFromStorage : cart);

    return (
        <CartContext.Provider value={{cartState, cartDispatch}}>
            {children}
        </CartContext.Provider>
    )
}
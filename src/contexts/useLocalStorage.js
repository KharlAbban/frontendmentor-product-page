export function getItemsFromStorage () {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    return cartItems.length > 0 ? cartItems : undefined;
}

export function sendItemsToStorage (cartItems) {
    localStorage.setItem("cart", JSON.stringify(cartItems));
}
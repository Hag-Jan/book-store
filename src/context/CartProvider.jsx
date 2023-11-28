import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    // Add To cart

    const addToCart = (item) => {

        const isExist = cartItems.find(cart => cart.id === item.id)

        if (isExist) {
            setCartItems(
                cartItems.map((cartItem) => cartItem.id === item.id ? item : cartItem)
            )
        } else {
            setCartItems((prev) => [...prev, item])
        }
    }

    // Remove From Cart
    const removeFromCart = (id) => {
        const cart = cartItems.filter((c) => c.id !== id)
        setCartItems(cart)
    }
    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            cartItemsLength: cartItems.length,
        }}>
            {children}
        </CartContext.Provider>
    );
}



export default CartProvider;
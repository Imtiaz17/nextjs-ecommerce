import { createContext, useState,useEffect } from "react";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:3000/api";
Axios.defaults.withCredentials = true;
const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState({})
    useEffect(() => {
        getCartItems()
    }, [])
    const getCartItems = () => {
        console.log(localStorage.getItem('cart_uuid'))
        if (localStorage.getItem('cart_uuid')!==null) {
            Axios.get(`/cart/${localStorage.getItem('cart_uuid')}`).then(res => {
                setCartItems(res.data.cartItems)
            })
        }else{
            setCartItems([])
        }
    }
    return (
        <CartContext.Provider value={{ item: cartItems }}>{children}</CartContext.Provider>
    )
}

export default CartContext;
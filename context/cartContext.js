import { createContext, useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import toast from "../components/global/toast";
import "react-toastify/dist/ReactToastify.css";
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:3000/api";
Axios.defaults.withCredentials = true;
const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([])
    useEffect(() => {
        getCartItems()
    }, [])
    const getCartItems = () => {
        if (localStorage.getItem('cart_uuid') !== null) {
            Axios.get(`/cart/${localStorage.getItem('cart_uuid')}`).then(res => {
                setCartItems(res.data.cartItems)
            })
        } else {
            setCartItems([])
        }
    }
    const updateCartItem = async (product, qty) => {
        let cart_id = localStorage.getItem("cart_uuid") ? localStorage.getItem("cart_uuid") : null
        const singleItem = cartItems.find(e => e.product == product);
        singleItem.quantity = qty;
        singleItem.cart_id = cart_id
        Axios.post('/addtocart', singleItem).then(res => {
            setCartItems((prevItmes) => {
                return res.data.cartItems
            });
            toast({ type: "success", message: "Product Updated!" });
        })

    };

    const deleteCartItem = async (product) => {
        let cart_id = localStorage.getItem("cart_uuid") ? localStorage.getItem("cart_uuid") : null
        const singleItem = cartItems.find(e => e.product == product);
        singleItem.cart_id = cart_id
        Axios.post('/delete-cart-item', singleItem).then(res => {
            setCartItems((prevItmes) => {
                return prevItmes.filter((item) => item.product !== product);
            });
            toast({ type: "success", message: "Product Deleted!" });
        })
    };

    const addItemToCart = async (data) => {
        let cart_id = localStorage.getItem("cart_uuid") ? localStorage.getItem("cart_uuid") : null
        try {
            let item = {
                product: data.id,
                quantity: data.quantity,
                price: data.price,
                cart_id: cart_id
            }
            Axios.post('/addtocart/', item).then(res => {
                if (cart_id == null) {
                    localStorage.setItem("cart_uuid", res.data.cart_id);
                }
                setCartItems((prevItems) => {
                    return res.data.cartItems
                })
                toast({ type: "success", message: "Product added into cart!" });

            })
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div>
        <ToastContainer
            position="top-right"
            hideProgressBar={true}
            newestOnTop={false}
            draggable={false}
            pauseOnVisibilityChange
            closeOnClick
        />
        

        <CartContext.Provider value={{ cartItems, setCartItems, addItemToCart, updateCartItem, deleteCartItem }}>{children}</CartContext.Provider>
        </div>
    )
}

export default CartContext;
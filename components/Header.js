import Link from "next/link"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import CartContext from "../context/cartContext";
import { useContext } from "react";
import QuantityInput from './global/QuantityInput';
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:3000/api";
Axios.defaults.withCredentials = true;
import toast from "./global/toast";
export const Header = () => {
    const { cartItems, setCartItems } = useContext(CartContext)
    const { subtotal } = useContext(CartContext)
    const { updateCartItem, deleteCartItem } = useContext(CartContext);
    const [isSideMenu, setSideMenu] = useState(false)
    const [user, setUser] = useState('')
    const open = (isSideMenu) => {
        return setSideMenu(!isSideMenu)
    }
    const qtyIncChange = (product, qty) => {
        updateCartItem(product, qty)
    }
    const qtyDecChange = (product, qty) => {
        updateCartItem(product, qty)
    }

    const deleteItem = (product) => {
        deleteCartItem(product)
    }
    useEffect(() => {
        if (localStorage.getItem('user')) {
            console.log(localStorage.getItem('user'))
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [])
    return (
        <div>
            {/* header */}
            <header className="py-4 bg-white">
                <div className="container flex items-center justify-between">

                    <Link href="/">
                        <a>
                            <Image src="/images/logo.png" alt="me" className="w-32" width="100%" height="32" />
                        </a>
                    </Link>

                    <div className="w-full max-w-xl relative flex">
                        <span className="absolute left-4 top-3 text-gray-400">
                            <i className="bi bi-search"></i>
                        </span>
                        <input type="text"
                            className="w-full border border-gray-300 border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:border-primary focus:outline-none"
                            placeholder="search" />
                        <button
                            className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
                    </div>

                    <div className="flex items-center space-x-7">
                        <a href="" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <i className="bi bi-heart"></i>
                            </div>
                            <div className="text-xs leading-3">Wish List</div>
                            <span
                                className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">4</span>
                        </a>

                        <a className="text-center text-gray-700 hover:text-primary transition relative cursor-pointer" onClick={() => { open(isSideMenu) }}>
                            <div className="text-2xl">
                                <i className="bi bi-cart2"></i>
                            </div>
                            <div className="text-xs leading-3">Cart</div>
                            <span
                                className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">{cartItems.length}</span>
                        </a>
                        <div className="text-center text-gray-700 hover:text-primary transition  cursor-pointer relative group">
                            <div className="text-2xl">
                                <i className="bi bi-person"></i>
                            </div>
                            <div className="text-xs leading-3">Account</div>
                            <div
                                className="absolute w-52 -left-20 top-34 bg-white shadow-md px-4 pt-4 pb-2 opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible max-h-80 overflow-auto ">
                                {user ? <div className="flex">
                                    welcome {user.firstName}
                                </div>
                                    : <div className="flex justify-between">
                                        <button className="bg-primary text-white py-1 px-1 rounded text-sm border font-semibold hover:bg-white hover:border-primary hover:text-primary w-20">  <Link href="/login" >
                                            Login
                                        </Link></button>

                                        <button className="bg-white text-primary border border-primary py-1 px-1 rounded text-sm font-semibold hover:bg-primary hover:border-primary hover:text-white w-20"><Link href="/signup" >
                                            Signup
                                        </Link></button>
                                    </div>}

                                <div className="relative mt-1">
                                    <a className="flex text-gray-600  items-center gap-2 py-2 px-1 transition hover:text-primary">
                                        <i class="bi bi-person-circle"></i>
                                        <span className="text-gray-600 text-sm hover:text-primary"> <Link href="/account">My Account</Link></span>
                                    </a>
                                    <a className="flex text-gray-600  items-center gap-2 py-2 px-1 transition hover:text-primary">
                                        <i class="bi bi-gift"></i>
                                        <span className="text-gray-600 text-sm hover:text-primary">My Order</span>
                                    </a>
                                    <a className="flex text-gray-600  items-center gap-2 py-2 px-1 transition hover:text-primary">
                                        <i class="bi bi-heart"></i>
                                        <span className="text-gray-600 text-sm hover:text-primary">My Wishlist</span>
                                    </a>
                                    <a className="flex text-gray-600  items-center gap-2 py-2 px-1 transition hover:text-primary">
                                        <i class="bi bi-pin-map"></i>
                                        <span className="text-gray-600 text-sm hover:text-primary">Track Order</span>
                                    </a>
                                    <a className="flex text-gray-600  items-center gap-2 py-2 px-1 transition hover:text-primary">
                                        <i class="bi bi-power"></i>
                                        <span className="text-gray-600 text-sm hover:text-primary">Logout</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

            <div className={'drawer drawer-right' + (isSideMenu ? " drawer-open" : "")}>
                <div className="drawer-mask"></div>
                <div className="drawer-content-wrapper" style={{ transform: isSideMenu ? 'translateX(0%)' : 'translateX(100%)' }}>
                    <div className="drawer-content">
                        <div className="flex flex-col justify-between w-full h-full">
                            <div
                                className="relative flex items-center justify-between w-full border-b pl-5 pr-5 md:ltr:pl-7 md:rtl:pr-7 border-border-base">
                                <h3 className="text-brand-dark font-semibold text-brand-dark text-xl">Shopping cart</h3>
                                <div className="flex items-center">
                                    <div
                                        className="flex items-center justify-center px-4 py-6 text-2xl transition-opacity md:px-6 lg:py-7 focus:outline-none text-brand-dark hover:opacity-60">
                                        <i className="bi bi-x-lg cursor-pointer" onClick={() => { open(isSideMenu) }}></i>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-grow w-full hover:overflow-scroll overflow-auto">
                                <div className="w-full px-5 md:px-7">
                                    {cartItems.length > 0 ?
                                        cartItems.map(product => {
                                            return <div className="group w-full h-auto flex justify-start text-brand-light py-4 md:py-7 border-b border-border-one border-opacity-70 relative last:border-b-0">
                                                <div className="flex-0 rounded overflow-hidden shrink-0 cursor-pointer w-14" style={{ flexShrink: 0 }}>
                                                    <img src={`http://localhost:3000/public/${product.img}`} />
                                                </div>

                                                <div className="flex items-start justify-between w-full overflow-hidden">
                                                    <div className="pl-3 md:pl-4">
                                                        <a href="" className="block leading-5 transition-all text-brand-dark text-13px sm:text-sm lg:text-15px hover:text-brand">{product.name}</a>
                                                        <div className="text-13px sm:text-sm text-brand-muted mt-1.5 block mb-2">1 each X <b>{product.quantity}</b></div>

                                                        <QuantityInput name="counter" value={product} onQuantityInc={qtyIncChange} onQuantityDec={qtyDecChange} />
                                                    </div>
                                                </div>

                                                <div className="relativefont-semibold text-sm md:text-base text-brand-dark leading-5 shrink-0 min-w-[65px] md:min-w-[80px] justify-end">
                                                    <span>${product.total_price}</span>
                                                    <div className="absolute bottom-5" onClick={() => deleteItem(product.product)}>
                                                        <i className="bi bi-x text-xl font-bold cursor-pointer"></i>
                                                    </div>
                                                </div>

                                            </div>
                                        }) : <div className="px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center">
                                            <div className="flex mx-auto w-[220px] md:w-auto">
                                                <span>
                                                    <img src="images/empty-cart.webp" alt="" />
                                                </span>

                                            </div>
                                            <div className="text-brand-dark font-semibold text-brand-dark text-xl mb-1.5 pt-8">
                                                Your cart is empty.
                                            </div>
                                            <p className="text-brand-muted text-sm text-gray-600 leading-7 lg:leading-[27px] lg:text-15px">
                                                Please add product to your cart list
                                            </p>
                                        </div>}

                                </div>
                            </div>


                            <div className="px-5 pt-5 pb-5 border-t border-border-base md:px-7 md:pt-6 md:pb-6">
                                <div className="flex pb-5 md:pb-7">
                                    <div className="pr-3 pl-3">
                                        <h3 className="text-brand-dark text-15px sm:text-base font-semibold mb-2.5">Subtotal:</h3>
                                        <p
                                            className="text-brand-muted text-sm text-gray-600 lg:leading-[27px] lg:text-15px leading-6">
                                            Final price and discounts will be determined at the time of payment processing.</p>
                                    </div>
                                    <div
                                        className="shrink-0 font-semibold text-base md:text-lg text-brand-dark -mt-0.5 min-w-[80px] text-right">
                                        {subtotal}</div>
                                </div>
                                {cartItems.length > 0 ?
                                    <div className="flex flex-col">
                                         <Link href="/checkout">
                                            <a className="w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded font-semibold text-sm sm:text-15px text-brand-light bg-primary focus:outline-none transition duration-300 hover:bg-opacity-90  text-white bg-fill-four hover:bg-fill-four">
                                      
                                           <span className="py-0.5">Proceed To Checkout</span></a>
                                           
                                           </Link>
                                    </div> :
                                    <div className="flex flex-col">
                                        <a href="#" className="w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded font-semibold text-sm sm:text-15px text-brand-light bg-gray-300 focus:outline-none transition duration-300 hover:bg-opacity-90 cursor-not-allowed text-gray-600 bg-fill-four hover:bg-fill-four">
                                             
                                            <span className="py-0.5">Proceed To Checkout</span>
                                        </a>

                                    </div>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
import Link from "next/link"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import CartContext from "../context/cartContext";
import { useContext } from "react";

export const Header = () => {
    const { item } = useContext(CartContext)
    const [isSideMenu, setSideMenu] = useState(false)
    const [cartId, setCartId] = useState('')
    const open = (isSideMenu) => {
        return setSideMenu(!isSideMenu)
    }
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
                                className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">{item.length}</span>
                        </a>

                        <a href="" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <i className="bi bi-person"></i>
                            </div>
                            <div className="text-xs leading-3">Account</div>
                        </a>
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
                                    {item.length > 0 ?
                                        item.map(product => {
                                            return <div className="group w-full h-auto flex justify-start text-brand-light py-4 md:py-7 border-b border-border-one border-opacity-70 relative last:border-b-0">
                                                <div className="flex-0 rounded overflow-hidden shrink-0 cursor-pointer w-28" style={{ flexShrink: 0 }}>
                                                    <img src="images/product/prod-1.png" alt="" />
                                                </div>
                                                <div className="flex items-start justify-between w-full overflow-hidden">
                                                    <div className="pl-3 md:pl-4">
                                                        <a href="" className="block leading-5 transition-all text-brand-dark text-13px sm:text-sm lg:text-15px hover:text-brand">{product.name}</a>
                                                        <div className="text-13px sm:text-sm text-brand-muted mt-1.5 block mb-2">1 each X <b>{product.qty}</b></div>

                                                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                                                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                                                            <div className="h-8 w-8 text-base flex items-center justify-center">4</div>
                                                            <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="relativefont-semibold text-sm md:text-base text-brand-dark leading-5 shrink-0 min-w-[65px] md:min-w-[80px] justify-end">
                                                    <span>${product.price}</span>
                                                    <div className="absolute bottom-5">
                                                        <i className="bi bi-x text-xl font-bold cursor-pointer"></i>
                                                    </div>
                                                </div>

                                            </div>
                                        }) : <div class="px-5 md:px-7 pt-8 pb-5 flex justify-center flex-col items-center">
                                            <div class="flex mx-auto w-[220px] md:w-auto">
                                                <span>
                                                    <img src="images/empty-cart.webp" alt="" />
                                                </span>

                                            </div>
                                            <div class="text-brand-dark font-semibold text-brand-dark text-xl mb-1.5 pt-8">
                                                Your cart is empty.
                                            </div>
                                            <p class="text-brand-muted text-sm text-gray-600 leading-7 lg:leading-[27px] lg:text-15px">
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
                                        $0.00</div>
                                </div>
                                {item.length > 0 ?
                                    <div className="flex flex-col">
                                        <a className="w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded font-semibold text-sm sm:text-15px text-brand-light bg-primary focus:outline-none transition duration-300 hover:bg-opacity-90  text-white bg-fill-four hover:bg-fill-four"
                                            href="/"><span className="py-0.5">Proceed To Checkout</span></a>
                                    </div> :
                                    <div class="flex flex-col">
                                        <a class="w-full px-5 py-3 md:py-4 flex items-center justify-center bg-heading rounded font-semibold text-sm sm:text-15px text-brand-light bg-gray-300 focus:outline-none transition duration-300 hover:bg-opacity-90 cursor-not-allowed text-gray-600 bg-fill-four hover:bg-fill-four"
                                            href="/"><span class="py-0.5">Proceed To Checkout</span></a>
                                    </div>}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
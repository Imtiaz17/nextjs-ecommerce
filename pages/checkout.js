import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { useContext } from "react";
import { useEffect, useState } from 'react';
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:3000/api";
Axios.defaults.withCredentials = true;
// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken')
    config.headers.Authorization = `Bearer ${token}`
    return config;
});
import CartContext from "../context/cartContext";
export default function Checkout() {
    const [address, setAddress] = useState([]);
    useEffect(() => {
        Axios.get('user/getaddress').then(res => {
            setAddress(res.data.userAddress.address)
        })
    }, [])
    const addresstype= (type) =>{
        if(type==1){
            return 'Shipping'
        }else if(type==2){
            return 'Billing'
        }else if(type==3){
            return 'Both (Shipping & Billing)'
        }
    }

    const { cartItems, setCartItems } = useContext(CartContext)
    const { subtotal } = useContext(CartContext)
    return (
        <div>
            <Header />

            <Navbar />

            {/* breadcrumb */}
            <div className="container flex py-4 items-center gap-2">
                <a href="index.html" className="text-primary">
                    <i className="bi bi-house-door-fill"></i>
                </a>
                <span className="text-sm text-gray-400">
                    <i className="bi bi-chevron-right"></i>
                </span>
                <p className="text-gray-600 font-medium">Shop <span className="text-sm text-gray-400">
                    <i className="bi bi-chevron-right"></i>
                </span> Checkout</p>
            </div>
            {/* breadcrumb end*/}
            {/* checkout wrapper */}
            <div className="container grid md:grid-cols-12 gap-6 pt-4 pb-16 items-start">
                <div className="lg:col-span-8 sm:col-span-12">
                    <p className="font-semibold mb-5">Delivery & Billing Details</p>
                    <div className="mt-5 flex gap-4">
                    {address.length > 0 ?address.map(info => {
                        return  <div className="shadow-lg px-4 py-3 cursor-pointer">
                            <p className="font-semibold">{addresstype(info.addressType)}</p>
                            <p className="pt-3">{info.address}</p>
                        </div>
                          }):<h4 className="text-lg text-gray-400"> Please add address before placeing order</h4>}
                        
                    </div>
                    
                </div>
                <div className="lg:col-span-4 sm:col-span-12">
                    <p className="font-semibold mb-5">YOUR ORDER</p>
                    <div className="bg-white border order-gray-400 rounded">
                        <div className="py-5 px-5">
                            <h3 className="border-b border-gray-300 border-opacity-60 pb-2 font-semibold">Product</h3>
                            <div className="grid space-y-4 mt-5">
                                {cartItems.length > 0 ?
                                    cartItems.map(product => {
                                        return <div className="flex justify-between text-gray-500 text-sm gap-3">
                                            <p>{product.name} X {product.quantity}</p>
                                            <p className='text-black font-semibold'>${product.total_price}</p>
                                        </div>
                                    }) : <div className="flex justify-between text-gray-500 text-sm">No product in cart</div>}


                                <div className="flex justify-between text-gray-500 text-sm border-b border-gray-300 pb-5 border-opacity-60">
                                    <p className="font-semibold text-black">Subtotal</p>
                                    <p className="font-semibold text-black">${subtotal}</p>
                                </div>
                                <div className="flex justify-between text-gray-500 text-sm border-b border-gray-300 border-opacity-60  pb-5">
                                    <p className="font-semibold text-black">Shipping</p>
                                    <p className="font-semibold text-black">Free</p>
                                </div>
                                <div className="flex justify-between text-gray-500 text-base pb-5">
                                    <p className="font-semibold text-black">Total</p>
                                    <p className="font-semibold text-black">$100</p>
                                </div>
                                <div className="flex items-center">
                                    <button className="bg-primary text-white py-3 px-8 rounded text-sm font-semibold hover:bg-opacity-75 w-full">Place Order</button>
                                </div>

                            </div>

                        </div>


                    </div>

                </div>

            </div>
            {/* checkout wrapper end */}
            <Footer />
        </div>
    )
}
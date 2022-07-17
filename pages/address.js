import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Link from "next/link"
import { useEffect, useState } from 'react';
import { Sidebar } from '../components/user/sidebar';
import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:3000/api";
Axios.defaults.withCredentials = true;
// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken')
    config.headers.Authorization = `Bearer ${token}`
    return config;
});
export default function address() {
    const [address, setAddress] = useState([]);
    const addresstype= (type) =>{
        if(type==1){
            return 'Shipping'
        }else if(type==2){
            return 'Billing'
        }else if(type==3){
            return 'Both (Shipping & Billing)'
        }
    }
    useEffect(() => {
        Axios.get('user/getaddress').then(res => {
            setAddress(res.data.userAddress.address)
        })
    }, [])


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
                </span> Address</p>
            </div>
            {/* breadcrumb end*/}
            {/* account wrapper */}

            <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
                <Sidebar />
                <div className="col-span-3">
                    <div className="shadow-lg rounded px-6 py-4">
                        <div className="flex justify-between">
                            <h4 className="text-lg font-semibold">Manage Address</h4>
                            <Link href="new-address">
                                <a className="bg-primary text-white py-2 px-2 rounded text-sm text-center font-semibold hover:bg-white hover:text-primary  border-transparent border-2 hover:border-current  hover:border-primary w-40">New address</a></Link>
                        </div>

                        <div className="overflow-x-auto border border-gray-200 relative mt-10 sm:rounded-lg">
                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                <thead
                                    className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="py-3 px-6">
                                            Address
                                        </th>
                                        <th scope="col" className="py-3 px-6">
                                            Address Type
                                        </th>

                                        <th scope="col" className="py-3 px-6">
                                            VIEW
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {address.length > 0 ?address.map(info => {
                                        return <tr
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row"
                                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                           {info.address}
                                        </th>

                                        <td className="py-4 px-6">
                                        {addresstype(info.addressType)}
                                        </td>
                                        <td className="py-4 px-6">
                                            <a href="#" className="text-lg text-primary">
                                                <i className="bi bi-eye"></i>
                                            </a>
                                        </td>
                                    </tr>
                                    }):<tr>No address found</tr>}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>

            {/* account wrapper end */}
            <Footer />
        </div>
    )
}
import { Header } from '../components/Header';
import { useRouter } from 'next/router';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { useEffect, useState } from 'react';
import Axios from "axios";
Axios.defaults.baseURL =  "http://localhost:3000/api";
Axios.defaults.withCredentials = true;
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, isLoading] = useState(false);
    const router = useRouter();
    const onSubmit = (e) => {
        e.preventDefault();
        isLoading(true)
        Axios.post('signin',{email:email,password:password}).then(res => {
           localStorage.setItem('accessToken',res.data.accessToken)
           localStorage.setItem('user',JSON.stringify(res.data.user))
           router.push("/");
           isLoading(false)
        })
        .catch(e=>{
            console.log(e)
            isLoading(false)
        })
    }
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
                <p className="text-gray-600 font-medium">Login</p>
            </div>
            {/* breadcrumb end*/}
            {/* shop wrapper */}
            <div className="container">
                <div className="flex justify-center">
                    <div className="bg-white md:w-2/5 sm:w-full p-10 rounded-lg filter drop-shadow-2xl shadow-black">
                        <h1 className="text-2xl font-bold">Login</h1>
                        <div className="mt-1 mb-6">
                            <p className="text-gray-800">Login if you a a returing customer</p>
                        </div>
                        <form onSubmit={onSubmit} >
                        <h3 className="text-base py-2">Email Address *</h3>
                        <input type="text" onChange={e=>setEmail(e.target.value)}
                            className="w-full border border-gray-300  pl-4 py-2 pr-1 ring-0	 rounded-md focus:border-primary focus:ring-0 focus:outline-none"
                            placeholder="Email" />

                        <h3 className="text-base py-2 mt-1">Password *</h3>
                        <input type="password" onChange={e=>setPassword(e.target.value)}
                            className="w-full border border-gray-300  pl-4 py-2 pr-1 rounded-md focus:border-primary focus:ring-0 focus:outline-none"
                            placeholder="Password" />

                        <div className="flex justify-between mt-4 mb-4">
                            <div className="flex items-center">
                                <input type="checkbox" name="cat" id="cat-4"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                                    <label for="cat-4" className="text-gray-600 ml-3 cursor-pointer">Remember Me</label>
                            </div>
                            <div className="flex">
                                <a href="#" className="text-primary">Forgot Password?</a>
                            </div>
                        </div>

                        <button className={"bg-primary text-white py-3 px-8 rounded text-sm font-semibold hover:bg-opacity-75 w-full"  + (loading ? " opacity-25 cursor-not-allowed" : "")}  type='submit'>Login</button>
                        </form>
                        <div className="flex md:justify-center sm:justify-start py-3">
                            <p className="text-base">Don't have an account? <a href="#" className="text-primary ml-2"> Register Now</a></p>
                        </div>

                    </div>
                </div>

            </div>
            {/* shop wrapper end */}
            <Footer />
        </div>
    )
}
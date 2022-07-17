import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
export default function Signup() {
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
                <p className="text-gray-600 font-medium">Signup</p>
            </div>
            {/* breadcrumb end*/}
            {/* shop wrapper */}
            <div className="container">
                <div className="flex justify-center">
                    <div className="bg-white md:w-2/5 sm:w-full p-10 rounded-lg filter drop-shadow-2xl shadow-black">
                        <h1 className="text-2xl font-bold">CREATE AN ACCOUNT</h1>
                        <div className="mt-1 mb-6">
                            <p className="text-gray-800">Register here if you are a new customer</p>
                        </div>

                        <h3 className="text-base py-2">Full Name *</h3>
                        <input type="text"
                            className="w-full border border-gray-300  pl-4 py-2 pr-1 ring-0	 rounded-l-md focus:border-primary focus:ring-0	 focus:outline-none"
                            placeholder="search" />

                        <h3 className="text-base py-2 mt-1">Email Address  *</h3>
                        <input type="text"
                            className="w-full border border-gray-300  pl-4 py-2 pr-1 rounded-l-md focus:border-primary focus:ring-0	 focus:outline-none"
                            placeholder="password" />

                        <h3 className="text-base py-2 mt-1">Password  *</h3>
                        <input type="text"
                            className="w-full border border-gray-300  pl-4 py-2 pr-1 rounded-l-md focus:border-primary focus:ring-0	 focus:outline-none"
                            placeholder="password" />

                        <h3 className="text-base py-2 mt-1">Confirm Password  *</h3>
                        <input type="text"
                            className="w-full border border-gray-300  pl-4 py-2 pr-1 rounded-l-md focus:border-primary focus:ring-0	 focus:outline-none"
                            placeholder="password" />

                        <div className="flex mt-4 mb-4">
                            <div className="flex items-center">
                                <input type="checkbox" name="cat" id="cat-4"
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                <label for="cat-4" className="text-gray-600 ml-3 cursor-pointer">I have read and agree to the <span className="text-primary">terms & conditions</span></label>
                            </div>
                        </div>

                        <button className="bg-primary text-white py-3 px-8 rounded text-sm font-semibold hover:bg-opacity-75 w-full">Create Account</button>
                        <div className="flex justify-center py-3">
                            <p className="text-base">Already have an account?</p> <a href="#" className="text-primary ml-2"> Login Now</a>
                        </div>

                    </div>
                </div>

            </div>
            {/* shop wrapper end */}
            <Footer />
        </div>
    )
}
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/user/sidebar';
export default function profile() {
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
                </span>Account</p>
            </div>
            {/* breadcrumb end*/}
            {/* account wrapper */}

            <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
                <Sidebar />
                <div className="col-span-3">
                    <div className="shadow-lg rounded px-6 py-4">
                        <h4 className="text-lg font-semibold">Profile Information</h4>
                        <div className="grid space-y-3 mt-5">
                            <div className="flex items-start gap-6">
                                <div className="w-full">
                                    <h3 className="text-base py-2">First name</h3>
                                    <input type="text"
                                        className="w-full border border-gray-300  pl-4 py-2 pr-1 ring-0	 rounded-sm focus:border-primary focus:ring-0	 focus:outline-none"
                                        placeholder="search" />
                                </div>
                                <div className="w-full">
                                    <h3 className="text-base py-2">Last name</h3>
                                    <input type="text"
                                        className="w-full border border-gray-300  pl-4 py-2 pr-1 ring-0	 rounded-sm focus:border-primary focus:ring-0	 focus:outline-none"
                                        placeholder="search" />
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-full">
                                    <h3 className="text-base py-2">First name</h3>
                                    <input type="text"
                                        className="w-full border border-gray-300  pl-4 py-2 pr-1 ring-0	 rounded-sm focus:border-primary focus:ring-0	 focus:outline-none"
                                        placeholder="search" />
                                </div>
                                <div className="w-full">
                                    <h3 className="text-base py-2">Last name</h3>
                                    <input type="text"
                                        className="w-full border border-gray-300  pl-4 py-2 pr-1 ring-0	 rounded-sm focus:border-primary focus:ring-0	 focus:outline-none"
                                        placeholder="search" />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start mt-5">
                            <button className="bg-primary text-white py-3 px-4 rounded text-sm font-semibold hover:bg-white hover:text-primary  border-transparent border-2 hover:border-current  hover:border-primary w-40">Save Changes</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* account wrapper end */}
            <Footer />
        </div>
    )
}
export const Navbar = () => {
    return (
        <div>
            {/* navbar */}
            <nav className="shadow-sm">
                <div className="container flex justify-between">
                    {/* all category */}
                    <div className="px-8 py-4 flex items-center cursor-pointer relative group">
                        <div className="bg-primary py-2 px-6 rounded-md">
                            <span className="text-white">
                                <i className="bi bi-list"></i>
                            </span>
                            <span className="ml-2 capitalize text-white">All Category</span>
                        </div>
                        <div
                            className="absolute w-full left-15 top-full bg-white shadow-md divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible ">
                            <a className="flex items-center py-3 px-6 hover:bg-gray-100 transition">
                                <span className="text-gray-600 text-sm">Sofa</span>
                            </a>
                            <a className="flex items-center py-3 px-6 hover:bg-gray-100 transition">
                                <span className="text-gray-600 text-sm">Sofa</span>
                            </a>
                            <a className="flex items-center py-3 px-6 hover:bg-gray-100  transition">
                                <span className="text-gray-600 text-sm">Sofa</span>
                            </a>
                            <a className="flex items-center py-3 px-6 hover:bg-gray-100  transition">
                                <span className="text-gray-600 text-sm">Sofa</span>
                            </a>
                        </div>

                    </div>
                    {/* nav links */}
                    <div className="flex items-center pl-8">
                        <div className="flex items-center space-x-6 capitalize">
                            <a href="shop.html" className="text-gray-600 hover:text-primary transition">Shop</a>
                            <a href="" className="text-gray-600 hover:text-primary transition">About Us</a>
                            <a href="" className="text-gray-600 hover:text-primary transition">Contact Us</a>
                            <a href="" className="text-gray-600 hover:text-primary transition">Track Order</a>
                        </div>
                    </div>

                </div>
            </nav>
            {/* navbar end */}
        </div>
    )
}
export const Header = () => {
    return (
        <div>
            {/* header */}
            <header className="py-4 bg-white">
                <div className="container flex items-center justify-between">

                    <a href="">
                        <img src="images/logo.png" className="w-32" alt="logo" />
                    </a>

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
                        <a href="" className="text-center text-gray-700 hover:text-primary transition relative">
                            <div className="text-2xl">
                                <i className="bi bi-cart2"></i>
                            </div>
                            <div className="text-xs leading-3">Cart</div>
                            <span
                                className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">4</span>
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

        </div>
    )
}
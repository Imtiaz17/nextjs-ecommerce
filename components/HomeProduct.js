import Link from "next/link"


export const HomeProduct = (props) => {
    return (
        <div>
            {/* product grid  */}
            <div className="grid grid-cols-4 gap-6">
                {/* single product  */}
                {props.data.map(item => {

                    return <div className="bg-white shadow rounded overflow-hidden group">
                        {/* product image  */}
                        <div className="relative w-40 h-40 mx-auto flex justify-center items-center">
                            <img src={`http://localhost:3000/public/${item.productPic[0].img}`} className="max-w-full max-h-full" alt="" />
                            <div
                                className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                                <a href="#"
                                    className="text-white  w-9 h-8 rounded-full bg-primary flex justify-center items-center hover:bg-gray-800 transition">
                                    <i className="bi bi-search"></i>
                                </a>
                                <a href="#"
                                    className="text-white  w-9 h-8 rounded-full bg-primary flex justify-center items-center hover:bg-gray-800 transition">
                                    <i className="bi bi-heart"></i>
                                </a>
                            </div>
                        </div>
                        {/* product image  */}
                        {/* product content */}
                        <div className="pt-4 pb-3 px-4">
                            <Link href={`/product/${item.slug}`} >
                                <a>
                                    <h4 className="text-xl font-medium min-h-full h-20 text-gray-800 uppercase mb-6 hover:text-primary transition">{item.name}
                                    </h4>
                                </a>
                            </Link>
                            <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                                <p className="text-xl text-primary font-semibold">${item.sell_price}</p>
                                {/* <p className="text-sm text-gray-400 line-through">$55.00</p> */}
                            </div>
                            <div className="flex items-center">
                                <div className="flex gap-1 text-sm text-yellow-400">
                                    <span><i className="bi bi-star-fill"></i></span>
                                    <span><i className="bi bi-star-fill"></i></span>
                                    <span><i className="bi bi-star-fill"></i></span>
                                    <span><i className="bi bi-star-fill"></i></span>
                                    <span><i className="bi bi-star-fill"></i></span>
                                </div>
                                <div className="text-xs text-gray-500 ml-2">(10)</div>
                            </div>
                        </div>
                        <a href=""
                            className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition ">Add
                            to cart</a>
                        {/* product content */}
                    </div>
                    {/* single product  */ }
                })}
            </div>
            {/* product grid  */}
        </div>
    )
}

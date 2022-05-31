import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import Link from "next/link"

const categoryDetailspage = ({ data,slug }) => {
    return (
        <div>
            <Header />
            <Navbar />
            {/* breadcrumb start  */}
            <div className="container flex py-4 items-center gap-2">
                <a href="index.html" className="text-primary">
                    <i className="bi bi-house-door-fill"></i>
                </a>
                <span className="text-sm text-gray-400">
                    <i className="bi bi-chevron-right"></i>
                </span>
                <p className="text-gray-600 font-medium">Shop</p>
                <span className="text-sm text-gray-400">
                    <i className="bi bi-chevron-right"></i>
                </span>
                <p className="text-gray-600 font-medium">{slug}</p>
            </div>
            {/* breadcrumb end  */}
            {/* shop wrapper */}
            <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
                {/* sidebar */}
                <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
                    <div className="divide-y divide-gray-200 space-y-5">
                        {/* category filter */}
                        <div>
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">categories</h3>
                            <div className="space-y-2">
                                {/* single category */}
                                <div className="flex items-center">
                                    <input type="checkbox" name="cat" id="cat-1"
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label for="cat-1" className="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                                {/* single category end */}
                                {/* single category */}
                                <div className="flex items-center">
                                    <input type="checkbox" name="cat" id="cat-2"
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label for="cat-2" className="text-gray-600 ml-3 cursor-pointer">Sofa</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                                {/* single category end */}
                                {/* single category */}
                                <div className="flex items-center">
                                    <input type="checkbox" name="cat" id="cat-3"
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label for="cat-3" className="text-gray-600 ml-3 cursor-pointer">Wordrobes</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                                {/* single category end */}
                                {/* single category */}
                                <div className="flex items-center">
                                    <input type="checkbox" name="cat" id="cat-4"
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label for="cat-4" className="text-gray-600 ml-3 cursor-pointer">Table</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                                {/* single category end */}
                            </div>
                        </div>
                        {/* category filter end */}
                        {/* brand filter */}
                        <div>
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">brands</h3>
                            <div className="space-y-2">
                                {/* single category */}
                                <div className="flex items-center">
                                    <input type="checkbox" name="cat" id="brand-1"
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label for="brand-1" className="text-gray-600 ml-3 cursor-pointer">Otobi</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                                {/* single category end */}
                                {/* single category */}
                                <div className="flex items-center">
                                    <input type="checkbox" name="cat" id="brand-2"
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label for="brand-2" className="text-gray-600 ml-3 cursor-pointer">Alien</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                                {/* single category end */}
                                {/* single category */}
                                <div className="flex items-center">
                                    <input type="checkbox" name="cat" id="brand-3"
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label for="brand-3" className="text-gray-600 ml-3 cursor-pointer">Akhter</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                                {/* single category end */}
                                {/* single category */}
                                <div className="flex items-center">
                                    <input type="checkbox" name="cat" id="brand-4"
                                        className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                    <label for="brand-4" className="text-gray-600 ml-3 cursor-pointer">Bengal</label>
                                    <div className="ml-auto text-gray-600 text-sm">(15)</div>
                                </div>
                                {/* single category end */}
                            </div>
                        </div>
                        {/* brand filter end */}
                        {/* price filter */}
                        <div className="pt-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                            <div className="mt-4 flex items-center">
                                <input type="text"
                                    className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                                    placeholder="min" />
                                <span className="mx-3 text-gray-500">-</span>
                                <input type="text"
                                    className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                                    placeholder="max" />
                            </div>
                        </div>
                        {/* price filter end*/}
                        {/* size filter */}
                        <div className="pt-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Size</h3>

                            <div className="flex items-center gap-2">
                                {/* single size */}
                                <div className="size-selector">
                                    <input type="radio" name="size" className="hidden" id="size-xs" />
                                    <label for="size-xs"
                                        className="text-xs border border-gray-200 rounded-sm  h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">Xs</label>
                                </div>
                                {/* single size end */}
                                {/* single size */}
                                <div className="size-selector">
                                    <input type="radio" name="size" className="hidden" id="size-s" />
                                    <label for="size-s"
                                        className="text-xs border border-gray-200 rounded-sm  h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                                </div>
                                {/* single size end */}
                                {/* single size */}
                                <div className="size-selector">
                                    <input type="radio" name="size" className="hidden" id="size-m" />
                                    <label for="size-m"
                                        className="text-xs border border-gray-200 rounded-sm  h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                                </div>
                                {/* single size end */}
                                {/* single size */}
                                <div className="size-selector">
                                    <input type="radio" name="size" className="hidden" id="size-l" />
                                    <label for="size-l"
                                        className="text-xs border border-gray-200 rounded-sm  h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                                </div>
                                {/* single size end */}
                            </div>
                        </div>
                        {/* color filter */}
                        <div className="pt-4">
                            <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">Color</h3>
                            <div className="flex items-center gap-2">
                                {/* single color */}
                                <div className="color-selector">
                                    <input type="radio" name="size" className="hidden" id="color-red" />
                                    <label for="color-red"
                                        className="text-xs border border-gray-200 rounded-sm  h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                                         style={{backgroundColor: 'red'}}></label>
                                </div>
                                {/* single color end */}
                                {/* single color */}
                                <div className="color-selector">
                                    <input type="radio" name="size" className="hidden" id="color-blue" />
                                    <label for="color-blue"
                                        className="text-xs border border-gray-200 rounded-sm  h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                                        style={{backgroundColor: 'blue'}}></label>
                                </div>
                                {/* single color end */}
                                {/* single color */}
                                <div className="color-selector">
                                    <input type="radio" name="size" className="hidden" id="color-green" />
                                    <label for="color-green"
                                        className="text-xs border border-gray-200 rounded-sm  h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                                        style={{backgroundColor: 'green'}}></label>
                                </div>
                                {/* single color end */}
                            </div>

                        </div>

                        {/* color filter end */}


                        {/* size filter end */}
                    </div>
                </div>
                {/* sidebar end*/}
                {/* product */}
                <div className="col-span-3">
                    {/* sorting */}
                    <div className="flex items-center mb-4">
                        <select name="sorting"
                            className="w-44 text-sm text-gray-600 px-2 py-2 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                            <option>Default sorting</option>
                            <option>Price low-high</option>
                            <option>Price high-low</option>
                            <option>Latest product</option>
                        </select>
                        <div className="flex gap-2 ml-auto">
                            <div
                                className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                                <i className="bi bi-grid-3x3-gap-fill"></i>
                            </div>
                            <div
                                className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600  rounded cursor-pointer">
                                <i className="bi bi-list-ul"></i>
                            </div>
                        </div>
                    </div>
                    {/* sorting end */}
                    {/* product grid */}
                    <div className="grid grid-cols-3 gap-6">
                        {data.length < 1 ? <h3>No product found</h3> :''}
                        {/* single product */}
                        {data.map(item => {
                            return  <div className="bg-white shadow rounded overflow-hidden group">
                            {/* product image */}
                            <div className="relative">
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
                            {/* product image */}
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
                        })}
                   
                        {/* single product */}
                      
                    </div>
                    {/* product grid */}

                </div>
                {/* product end */}
            </div>
            {/* shop wrapper end */}
        </div>
    )
}
export async function getServerSideProps({  params }) {
    const res = await fetch('http://localhost:3000/api/category-wise-product/' + params.slug)
    const data = await res.json();
    return {
        props: {
            data: data.product,
            slug:params.slug
        },
    };
}

export default categoryDetailspage;
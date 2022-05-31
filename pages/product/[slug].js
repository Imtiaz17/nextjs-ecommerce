import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar';
import { API } from '../../config';
import Axios from "axios";
import Image from 'next/image'
import { HomeProduct } from '../../components/HomeProduct';
import { useEffect, useState } from 'react';
import { useContext } from "react";
import CartContext from "../../context/cartContext";
import QuantityInput from '../../components/global/QuantityInput';

Axios.defaults.baseURL = "http://localhost:3000/api";
Axios.defaults.withCredentials = true;
const Details = ({ data }) => {
    const { addItemToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [rProducts, setRProducts] = useState(1);
    const [cart, setCart] = useState({});
    const handleQtyChange = (event) => {
        console.log(event.target.value);
    };
    const qtyIncChange = () => {
        setQuantity(quantity + 1)
    }
    const qtyDecChange = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
    function addToCart(data) {
        data.quantity=quantity
        addItemToCart(data)
      }
    useEffect(() => {
        if (data) {
            Axios.post('/related-products/',data).then(res => {
                setRProducts(res.data.product);
            })
        }
    }, [])
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
                <p className="text-gray-600 font-medium">{data.name}</p>
            </div>
            {/* breadcrumb end  */}

            {/* product view */}
            <div className="container grid grid-cols-2 gap-6 pb-16">

                <div>
                    <Image src={`${API}/public/${data.productPic[0].img}`} alt="me" className="w-full" width="100%" height="100%" layout="responsive" objectFit="contain" />

                    <div className="grid grid-cols-5 gap-4 mt-4">
                        <Image src="/images/product/prod-1.png" alt="me" className="w-full cursor-pointer border border-primary" width="100%" height="100%" layout="responsive" objectFit="contain" />
                        <Image src="/images/product/prod-2.png" alt="me" className="w-full cursor-pointer border border-primary" width="100%" height="100%" layout="responsive" objectFit="contain" />
                        <Image src="/images/product/prod-3.png" alt="me" className="w-full cursor-pointer border border-primary" width="100%" height="100%" layout="responsive" objectFit="contain" />
                        <Image src="/images/product/prod-4.png" alt="me" className="w-full cursor-pointer border border-primary" width="100%" height="100%" layout="responsive" objectFit="contain" />
                    </div>
                </div>
                <div>

                    <h2 className="uppercase text-3xl font-medium mb-2">{data.name}</h2>
                    <div className="flex items-center mb-4">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span><i className="bi bi-star-fill"></i></span>
                            <span><i className="bi bi-star-fill"></i></span>
                            <span><i className="bi bi-star-fill"></i></span>
                            <span><i className="bi bi-star-fill"></i></span>
                            <span><i className="bi bi-star-fill"></i></span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(34 Reviews)</div>
                    </div>
                    <div className="space-y-2">
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Availability :</span>
                            <span className="text-green-600">In Stock</span>
                        </p>
                        <p className="text-gray-800 font-semibold">
                            <span>Brand :</span>
                            <span className="text-gray-600">{data.brand.name}</span>
                        </p>
                        <p className="text-gray-800 font-semibold">
                            <span>Category :</span>
                            <span className="text-gray-600">{data.category.name}</span>
                        </p>
                    </div>
                    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p className="text-xl text-primary font-semibold">${data.sell_price}</p>
                        {/* <p className="text-sm text-gray-400 line-through">$55.00</p> */}
                    </div>
                    <p className="text-gray-600 mt-4">
                        {data.description}
                    </p>

                    {/* <div className="pt-4">
                        <h3 className="text-l text-gray-800 mb-1 uppercase font-medium">Size</h3>

                        <div className="flex items-center gap-2">

                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-xs" />
                                <label for="size-xs"
                                    className="text-xs border border-gray-200 rounded-sm  h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">Xs</label>
                            </div>

                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-s" />
                                <label for="size-s"
                                    className="text-xs border border-gray-200 rounded-sm  h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">S</label>
                            </div>


                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-m" />
                                <label for="size-m"
                                    className="text-xs border border-gray-200 rounded-sm  h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">M</label>
                            </div>

                            <div className="size-selector">
                                <input type="radio" name="size" className="hidden" id="size-l" />
                                <label for="size-l"
                                    className="text-xs border border-gray-200 rounded-sm  h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">L</label>
                            </div>

                        </div>
                    </div> */}

                    {/* <div className="pt-4">
                        <h3 className="text-l text-gray-800 mb-1 uppercase font-medium">Color</h3>
                        <div className="flex items-center gap-2">

                            <div className="color-selector">
                                <input type="radio" name="size" className="hidden" id="color-red" />
                                <label for="color-red"
                                    className="text-xs border border-gray-200 rounded-sm  h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                                    style={{backgroundColor: 'red'}}></label>
                            </div>

                            <div className="color-selector">
                                <input type="radio" name="size" className="hidden" id="color-blue" />
                                <label for="color-blue"
                                    className="text-xs border border-gray-200 rounded-sm  h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                                    style={{backgroundColor: 'blue'}}></label>
                            </div>

                            <div className="color-selector">
                                <input type="radio" name="size" className="hidden" id="color-green" />
                                <label for="color-green"
                                    className="text-xs border border-gray-200 rounded-sm  h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm"
                                    style={{backgroundColor: 'green'}}></label>
                            </div>

                        </div>

                    </div> */}


                    <div className="mt-4">
                        <h3 className="text-l text-gray-800 mb-1 uppercase font-medium">Quantity</h3>
                        <QuantityInput name="counter" value={quantity} onQuantityDec={qtyDecChange} onQuantityInc={qtyIncChange} />

                    </div>


                    <div className="flex gap-4 border-b border-gray-200 pb-6 mt-6">
                        <button  onClick={() => addToCart(data)}
                            className="bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition">
                            <i className="bi bi-cart3"></i> Add to cart
                        </button >
                        <a href="#"
                            className="bg-white border border-primary text-primary px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-primary hover:text-white transition">
                            <i className="bi bi-heart"></i>Wishlist
                        </a>
                    </div>

                    <div className="flex gap-3 mt-4">
                        <a href="#" className="rounded bg-white text-gray-400 text-sm border border-gray-400 flex items-center justify-center w-8 h-8 hover:text-gray-500"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="rounded bg-white text-gray-400 text-sm border border-gray-400 flex items-center justify-center w-8 h-8 hover:text-gray-500"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="rounded bg-white text-gray-400 text-sm border border-gray-400 flex items-center justify-center w-8 h-8 hover:text-gray-500"><i className="bi bi-instagram"></i></a>

                    </div>

                </div>

            </div>
            {/* product view end */}

            <div className="container pb-16">
                <h2 className="text-2xl text-center font-medium text-gray-800 uppercase mb-6">Related Products</h2>
                <HomeProduct data={rProducts.length > 0 ? rProducts : []} />
            </div>

            {/* footer start  */}

            <Footer />

            {/* footer end  */}



        </div >

    )
}
export async function getServerSideProps({ params }) {
    const res = await fetch('http://localhost:3000/api/product/' + params.slug)
    const data = await res.json();

    return {
        props: {
            data: data.product
        },
    };
}

export default Details;
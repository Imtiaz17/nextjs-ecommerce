import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { FeaturedCategories } from '../components/FeaturedCategories';
import { HomeProduct } from '../components/HomeProduct';
import Axios from "axios";
import { useEffect, useState } from 'react';

Axios.defaults.baseURL =  "http://localhost:3000/api";
Axios.defaults.withCredentials = true;
export default function Home() {
  const [categories, setCategories] = useState([]);
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);
  useEffect(() => {
    getCategories()
    getFeaturedProduct()
    getRecentProducts()
  }, [])

  const getCategories = () => {
    Axios.get('/categories').then(res => {
      setCategories(res.data.categoryList);
      let featuredCats=res.data.categoryList.filter(item=>{
        return item.featured==1
      })
      setFeaturedCategories(featuredCats)
    })
  }
  const getFeaturedProduct = () => {
    Axios.get('/featuredproducts').then(res => {
      setFeaturedProducts(res.data.product);
    })
  }
  const getRecentProducts = () => {
    Axios.get('/newproducts').then(res => {
      setRecentProducts(res.data.product);
    })
  }

  return (
    <div>
      <Header />
     
      <Navbar/>
      {/* banner */}
      <div className="bg-cover bg-no-repeat bg-center py-40" style={{ backgroundImage: "url('images/slide-1.jpg')" }}>
        <div className="container">
          <h4 className="capitalize font-normal text-gray-500 text-2xl tracking-wider">Find the Boundaries. Push Through !
          </h4>
          <h2 className="uppercase text-7xl font-bold text-gray-800">Sunglasses</h2>
          <div className="mt-12">
            <a href=""
              className="capitalize bg-primary border-primary text-white px-8 py-3 font-medium rounded-md hover:bg-white hover:text-primary hover:border-primary">Shop
              Now</a>
          </div>
        </div>
      </div>
      {/* banner */}
      {/* feature section */}
      <div className="container py-16">
        <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
          {/* single feature */}
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img src="images/delivery-truck.svg" alt="" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">Free shipping</h4>
              <p className="text-gray-500 text-sm">Order over $200</p>
            </div>
          </div>
          {/* single feature */}
          {/* single feature */}
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img src="images/money-back.svg" alt="" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">Money back gurentee</h4>
              <p className="text-gray-500 text-sm">30 days money return</p>
            </div>
          </div>
          {/* single feature */}
          {/* single feature */}
          <div className="border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5">
            <img src="images/service.svg" alt="" className="w-12 h-12 object-contain" />
            <div>
              <h4 className="font-medium capitalize text-lg">24/7 support</h4>
              <p className="text-gray-500 text-sm">Customer support</p>
            </div>
          </div>
          {/* single feature */}
        </div>
      </div>
      {/* features section */}
      <FeaturedCategories cats={featuredCategories} />
      {/* new product wrapper */}
      <div className="container pb-16">
        <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
        <HomeProduct data={recentProducts} />
      </div>
      {/* new product wrapper end */}
      {/*ad section  */}
      <div className="container pb-16">
        <a href="#">
          <img src="images/slide_3.jpg" alt="banner" className="w-full" />
        </a>
      </div>
      {/* ad section end  */}
      {/* recommanded product wrapper */}
      <div className="container pb-16">
        <h2 className="text-3xl font-medium text-gray-800 uppercase mb-6">Featured Products</h2>
        <HomeProduct data={featuredProducts} />
      </div>
      {/* recommanded product wrapper end */}
      <Footer />
    </div>
  )
}

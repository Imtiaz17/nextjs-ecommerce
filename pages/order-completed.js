import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import Link from "next/link"
export default function order_completed() {
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
                </span> Order complete</p>
            </div>
            {/* breadcrumb end*/}
            {/* account wrapper */}

            <div className="container">
                <div className='flex justify-center items-center flex-col space-y-4'>
                    <i className="bi bi-check-circle-fill text-primary text-7xl"></i>
                    <h3 className='text-2xl font-semibold'>YOUR ORDER IS COMPLETED!</h3>
                    <p className='text-center'>Thank you for your order! Your order is being processed and will be completed within 3-6 hours. <br /> You will receive an email confirmation when your order is completed.</p>

                    <Link href='/'><a className="bg-primary text-white  py-3 px-10 uppercase rounded text-sm font-semibold hover:bg-white hover:text-primary  border-transparent border-2 hover:border-current hover:border-primary w-70" >Continue Shopping</a></Link>

                </div>

            </div>

            {/* account wrapper end */}
            <Footer />
        </div>
    )
}
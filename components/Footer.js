import Image from 'next/image'
export const Footer = () => {
    return (
        <div className="mt-10">
            {/* footer */}
            <footer className="bg-white pt-16 pb-10 border-t border-gray-100">
                <div className="container grid grid-cols-3 gap-10">
                    {/* footer logo & text */}
                    <div className="col-span-1 space-y-5">
                    <Image src="/images/logo.png" alt="me" className="w-32" width="100%" height="32" />
                        <p className="text-gray-800">
                            Lorem ipsum, or lipsum as it is sometimes kno wn, is dummy text used in laying out print, gra phic
                            or web designs the passage.
                        </p>
                        <h4 className="uppercase text-lg font-medium text-black">Newsletter</h4>
                        <div className="flex">
                            <input type="text"
                                className="border border-gray-300 border-r-0 py-2 px-2 rounded-l-md focus:border-primary focus:outline-none"
                                placeholder="Your email address" />
                            <button
                                className="bg-primary border border-primary text-white px-2 rounded-r-md hover:bg-transparent hover:text-primary transition">Subscribe</button>
                        </div>
                    </div>
                    {/* footer logo & text end */}

                    {/* footer link */}
                    <div className="col-span-1 grid grid-cols-2">
                        <div>
                            <h3 className="text-lg font-medium text-black uppercase">My account</h3>
                            <div className="mt-4 col-span-1 space-y-4">
                                <a href="#" className="text-base text-black capitalize hover:text-primary block">Orders</a>
                                <a href="#" className="text-base text-black capitalize hover:text-primary block">Wishlist</a>
                                <a href="#" className="text-base text-black capitalize hover:text-primary block">Track order</a>
                                <a href="#" className="text-base text-black capitalize hover:text-primary block">Return order</a>
                                <a href="#" className="text-base text-black capitalize hover:text-primary block">Manage Accoutn</a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-black uppercase">INFORMATION</h3>
                            <div className="mt-4 col-span-1 space-y-4">
                                <a href="#" className="text-base text-black capitalize hover:text-primary block">About us</a>
                                <a href="#" className="text-base text-black capitalize hover:text-primary block">Return policy</a>
                                <a href="#" className="text-base text-black capitalize hover:text-primary block">Terms &
                                    Condition</a>
                                <a href="#" className="text-base text-black capitalize hover:text-primary block">Privacy policy</a>
                                <a href="#" className="text-base text-black capitalize hover:text-primary block">Faq</a>
                            </div>
                        </div>
                    </div>
                    {/* footer link end*/}

                    {/* contact info */}
                    <div className="col-span-1 grid grid-cols-1">
                        <h3 className="text-lg font-medium text-black uppercase">Contact</h3>
                        <div className="mt-4 col-span-1 space-y-4">
                            <p className="pl-8 relative"><i className="bi bi-geo-alt absolute left-0 top-0"></i>7895 Dr New Albuquerue,
                                NM 19800, <br />
                                United States Of America </p>

                            <p className="pl-8 relative"><i className="bi bi-telephone absolute left-0 top-0"></i>+566 477 256, +566 254
                                575 </p>
                            <p className="pl-8 relative"><i className="bi bi-envelope absolute left-0 top-0"></i>info@domain.com </p>
                            <div className=" grid grid-cols-3">
                                <div className="col-span-3 space-x-4">
                                    <i className="bi bi-facebook text-2xl cursor-pointer" style={{color: "#3B5998"}}></i>
                                    <i className="bi bi-twitter text-2xl cursor-pointer" style={{color: "#00ACEE"}}></i>
                                    <i className="bi bi-instagram text-2xl cursor-pointer" style={{color: "#D53982"}}></i>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* contact info end */}

                </div>

            </footer>

            {/* footer end */}

            {/* copyright area */}
            <div className="bg-gray-800 py-4">
                <div className="container flex justify-between items-center">
                    <p className="text-white">© FastCart - All Rights Reserved</p>
                    <Image src="/images/payment-method.png" alt="payment-method" className="h-5" width="250" height="20" />
                </div>

            </div>
            {/* copyright area end */}

        </div>
    )
}
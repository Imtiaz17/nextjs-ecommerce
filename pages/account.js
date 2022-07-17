import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/user/sidebar';
export default function account() {
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
                </span> Account</p>
            </div>
            {/* breadcrumb end*/}
            {/* account wrapper */}

            <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
                <Sidebar />
                <div className="col-span-3">
                    <div className="flex gap-5">
                        <div className="shadow-lg rounded px-4 py-4 w-1/3">
                            <div className="flex justify-between">
                                <h4 className="text-lg font-semibold">Personal Profile</h4>
                                <a href="#" className="text-primary">Edit</a>
                            </div>
                            <div className="mt-4">
                                <p>Imtiaz Ahmed</p>
                                <p>example@mail.com</p>
                                <p>(123) 456-789</p>
                            </div>
                        </div>
                        <div className="shadow-lg  rounded px-4 py-6 w-1/3">
                            <div className="flex justify-between">
                                <h4 className="text-lg font-semibold">Shipping Address</h4>
                                <a href="#" className="text-primary">Edit</a>
                            </div>
                            <div className="mt-4">
                                <p>Ralph Bohner</p>
                                <p>3891 Ranchview Dr.</p>
                                <p>(123) 456-789</p>
                            </div>
                        </div>
                        <div className="shadow-lg  rounded px-4 py-6 w-1/3">
                            <div className="flex justify-between">
                                <h4 className="text-lg font-semibold">Billing Address</h4>
                                <a href="#" className="text-primary">Edit</a>
                            </div>
                            <div className="mt-4">
                                <p>Ralph Bohner</p>
                                <p>3891 Ranchview Dr.Richardson, Califora</p>
                                <p>(123) 456-789</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="shadow-lg  rounded px-4 py-6 w-full">
                            <h4 className="text-lg font-semibold">Recent Orders</h4>
                            <div className="overflow-x-auto relative mt-2 sm:rounded-lg">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead
                                        className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr>
                                            <th scope="col" className="py-3 px-6">
                                                ORDER ID
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                ITEMS
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                STATUS
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                PRICE
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                VIEW
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row"
                                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                #12444
                                            </th>
                                            <td className="py-4 px-6">
                                                <div> Outwear & Coats</div>
                                                <div> Outwear & Coats</div>
                                            </td>
                                            <td className="py-4 px-6">
                                                Shipped
                                            </td>
                                            <td className="py-4 px-6">
                                                $2999
                                            </td>
                                            <td className="py-4 px-6">
                                                <a href="#" className="text-lg text-primary">
                                                    <i className="bi bi-eye"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            <th scope="row"
                                                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                #12444
                                            </th>
                                            <td className="py-4 px-6">
                                                <div>  Apple MacBook Pro 17"</div>
                                                <div> Outwear & Coats</div>
                                            </td>
                                            <td className="py-4 px-6">
                                                Pending
                                            </td>
                                            <td className="py-4 px-6">
                                                $2999
                                            </td>
                                            <td className="py-4 px-6">
                                                <a href="#" className="text-lg text-primary">
                                                    <i className="bi bi-eye"></i>
                                                </a>

                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* account wrapper end */}
            <Footer />
        </div>
    )
}
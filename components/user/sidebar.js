import Link from "next/link"
import { useRouter } from "next/router";

export const Sidebar = () => {
    const router = useRouter();
    return (<div className="col-span-1 bg-white px-4 pb-6 overflow-hidden space-y-3">
        <div className="shadow-lg rounded">
            <div className="flex gap-4 py-2 px-2">
                <img src="https://themes.programmingkit.xyz/rafcart/assets/images/avatar-2.png" alt="avatar-2"
                    className="w-12 h-12" />
                <div>
                    <p className="text-base">Hello,</p>
                    <h4 className="text-lg text-gray-600">Imtiaz Ahmed</h4>
                </div>
            </div>
        </div>
        <div className="shadow-lg rounded px-2 py-2 ">
            <div className="divide-y divide-gray-200 space-y-4">
                <div className="pt-3">
                    <div className="flex gap-2 items-center">
                        <span  className={router.pathname == "/account" ? "text-lg text-primary" : "text-lg"}>
                            <i className="bi bi-person-bounding-box"></i>
                        </span>
                        <h4  className={router.pathname == "/account" ? "text-base font-semibold text-primary" : "text-base font-semibold"}><Link href="/account">Manage My Account</Link></h4>
                    </div>
                    <ul className="pl-6 space-y-2 py-2">
                        <li className={router.pathname == "/profile" ? "text-base font-semibold text-primary" : "text-base"}>
                            <Link href="/profile">Profile Information</Link>
                        </li>
                        <li className={router.pathname == "/address" ? "text-base font-semibold text-primary" : "text-base"}>
                            <Link href="/address">Manage Address</Link>
                        </li>
                        <li>Change Password</li>
                    </ul>
                </div>
                <div className="pt-3">
                    <div className="flex gap-2 items-center">
                        <span className="text-lg">
                            <i className="bi bi-gift"></i>
                        </span>
                        <h4 className="text-base font-semibold">My Order History</h4>
                    </div>
                    <ul className="pl-6 space-y-2 py-2">
                        <li>Profile Information</li>
                        <li>Manage Address</li>
                        <li>Change Password</li>
                    </ul>
                </div>
                <div className="pt-3">
                    <div className="flex gap-2 items-center">
                        <span className="text-lg">
                            <i className="bi bi-credit-card"></i>
                        </span>
                        <h4 className="text-base font-semibold">Payments Methods</h4>
                    </div>
                    <ul className="pl-6 space-y-2 py-2">
                        <li>Profile Information</li>
                        <li>Manage Address</li>
                        <li>Change Password</li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
    )
}
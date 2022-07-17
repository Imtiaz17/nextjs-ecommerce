import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Sidebar } from '../components/user/sidebar';
import { Country, State, City } from 'country-state-city';
import toast from "../components/global/toast";
import { useRouter } from 'next/router';
import Axios from "axios";
Axios.defaults.baseURL =  "http://localhost:3000/api";
Axios.defaults.withCredentials = true;
// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('accessToken')
    config.headers.Authorization = `Bearer ${token}`
    return config;
});

export default function newaddress() {
    useEffect(() => {
        setCountries(Country.getAllCountries());
    }, [])
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [addressType, setAddressType] = useState('');
    const [loading, isLoading] = useState(false);
    const router = useRouter();
    const countryChange = (val) => {
        setCountry(val)
        setStates(State.getStatesOfCountry(val))
    }
    const stateChange = (val) => {
        setState(val)
        setCities(City.getCitiesOfState(country, val))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        isLoading(true)
        const payload = {
            address: {
              name,
              mobileNumber,
              zipcode,
              country,
              address,
              city,
              state,
              addressType,
            },
          };
        Axios.post('address/add',payload).then(res => {
            toast({ type: "success", message: "Address Added!" });
            router.push("/address");
        })
        .catch(e=>{
            console.log(e)
            isLoading(false)
        })
    }

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
                </span> Address</p>
            </div>
            {/* breadcrumb end*/}
            {/* account wrapper */}

            <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
                <Sidebar />

                <div className="col-span-3">
                <form onSubmit={onSubmit} >
                    <div className="shadow-lg rounded px-6 py-4">
                        <h4 className="text-lg font-semibold">Add New Address</h4>
                        <div className="grid space-y-3 mt-5">
                            <div className="flex items-start gap-6">
                                <div className="w-full">
                                    <h3 className="text-base py-2">Full name</h3>
                                    <input type="text" required onChange={e => setName(e.target.value)}
                                        className="w-full border border-gray-300  pl-4 py-2 pr-1 ring-0	 rounded-sm focus:border-primary focus:ring-0	 focus:outline-none"
                                        placeholder="Full name" />
                                </div>
                                <div className="w-full">
                                    <h3 className="text-base py-2">Phone Number</h3>
                                    <input type="text" required onChange={e => setMobileNumber(e.target.value)}
                                        className="w-full border border-gray-300  pl-4 py-2 pr-1 ring-0	 rounded-sm focus:border-primary focus:ring-0	 focus:outline-none"
                                        placeholder="Mobile number" />
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-full">
                                    <h3 className="text-base py-2">Country</h3>
                                    <select className="form-select appearance-none
                                        block
                                        w-full
                                        px-3
                                        py-2
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding bg-no-repeat
                                        border border-solid border-gray-300
                                        rounded-sm
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700 focus:ring-0 focus:border-primary  focus:outline-none"
                                        aria-label="Select" required onChange={e => countryChange(e.target.value)}>
                                        <option selected value=''>Select</option>
                                        {countries.map(country => {
                                            return <option value={country.isoCode}>{country.name}</option>
                                        })}
                                    </select>

                                </div>
                                <div className="w-full">
                                    <div className="w-full">
                                        <h3 className="text-base py-2">State</h3>
                                        <select className="form-select appearance-none
                                        block
                                        w-full
                                        px-3
                                        py-2
                                        text-base
                                        font-normal
                                        text-gray-700
                                        bg-white bg-clip-padding bg-no-repeat
                                        border border-solid border-gray-300
                                        rounded-sm
                                        transition
                                        ease-in-out
                                        m-0
                                        focus:text-gray-700  focus:ring-0 focus:border-primary  focus:outline-none"
                                            aria-label="Default select example" required onChange={e => stateChange(e.target.value)}>
                                            <option selected value=''>Select</option>
                                            {states.map(state => {
                                                return <option value={state.isoCode}>{state.name}</option>
                                            })}
                                        </select>

                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="w-full">
                                    <h3 className="text-base py-2">City</h3>
                                    <select className="form-select appearance-none
                            block
                            w-full
                            px-3
                            py-2
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded-sm
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:ring-0 focus:border-primary focus:outline-none"
                                        aria-label="Default select example" required onChange={e => setCity(e.target.value)}>
                                        <option selected value='' >Select</option>
                                        {cities.map(city => {
                                            return <option value={city.name}>{city.name}</option>
                                        })}
                                    </select>

                                </div>
                                <div className="w-full">
                                    <div className="w-full">
                                        <h3 className="text-base py-2">Area code</h3>
                                        <input type="text" required onChange={e => setZipcode(e.target.value)}
                                            className="w-full border border-gray-300  pl-4 py-2 pr-1 ring-0	 rounded-sm focus:border-primary focus:ring-0	 focus:outline-none"
                                            placeholder="Zip code" />

                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <div className="w-full">
                                    <h3 className="text-base py-2">Address</h3>
                                    <input type="text" required  onChange={e => setAddress(e.target.value)}
                                        className="w-full border border-gray-300  pl-4 py-2 pr-1 ring-0	 rounded-sm focus:border-primary focus:ring-0	 focus:outline-none"
                                        placeholder="Full address" />
                                </div>

                            </div>

                            <div className="flex">
                                <div className="w-2/4">
                                    <h3 className="text-base py-2">Address Type</h3>
                                    <select className="form-select appearance-none
                            block
                            w-full
                            px-3
                            py-2
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded-sm
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:ring-0 focus:border-primary  focus:outline-none"
                                        aria-label="Default select example" required onChange={e => setAddressType(e.target.value)}>
                                        <option selected value="">Open this select menu</option>
                                        <option value="1">Shipping</option>
                                        <option value="2">Billing</option>
                                        <option value="3">Both (Shipping & Billing)</option>
                                    </select>
                                </div>

                            </div>

                        </div>
                        <div className="flex justify-end mt-5">
                        <button className={"bg-primary text-white py-3 px-4 rounded text-sm font-semibold hover:bg-white hover:text-primary  border-transparent border-2 hover:border-current hover:border-primary w-40"  + (loading ? " opacity-25 cursor-not-allowed" : "")}  type='submit'>Save Changes</button>
                        </div>

                    </div>
                    </form>
                </div>


            </div>

            {/* account wrapper end */}
            <Footer />
        </div>
    )
}
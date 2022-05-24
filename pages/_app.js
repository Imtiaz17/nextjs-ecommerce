// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
// import App from 'next/app'
import '../styles/style.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Axios from "axios";

Axios.defaults.baseURL = "http://localhost:3000/api";
Axios.defaults.withCredentials = true;
import {CartProvider} from "../context/cartContext"
function MyApp({ Component, pageProps }) {

  return ( <CartProvider><Component {...pageProps} /></CartProvider> )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
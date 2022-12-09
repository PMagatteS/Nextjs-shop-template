import Head from "next/head";
import Navbar from "./Navbar"
import Configbar from "./Configbar"
import Cart from "./Cart"
import { useStateContext } from "../context/useStateContext";

const Layout = ({children, home}) => {
    const {showCart} = useStateContext()
    return (
        <>
        <Head>

        </Head> 
        {home?(<><Navbar isHome={true} ></Navbar><Configbar></Configbar></>):<Navbar></Navbar>}
        {showCart&&<Cart></Cart>}

        {children}
        </>
    );
};

export default Layout;
import Searchbar from "./Searchbar";
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import { useStateContext } from "../context/useStateContext";
const Navbar = ({isHome}) => {
  const {toggleCart, cartItems} = useStateContext()
  return (
    <div className="navbar">
      
      {isHome?<Searchbar></Searchbar>:<Link href="/" className="back-home"><AiOutlineArrowLeft className="back-arrow"></AiOutlineArrowLeft></Link>}
      <div
        className="cart-icon"
        data-qty={cartItems.length}
      >
        <AiOutlineShoppingCart color="white" size={30} onClick={toggleCart}></AiOutlineShoppingCart>
      </div>
    </div>
  );
};

export default Navbar;

import Searchbar from "./Searchbar";
import { AiOutlineShoppingCart, AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
const Navbar = ({isHome}) => {
  return (
    <div className="navbar">
      
      {isHome?<Searchbar></Searchbar>:<Link href="/" className="back-home"><AiOutlineArrowLeft className="back-arrow"></AiOutlineArrowLeft></Link>}
      <div
        className="cart-icon"
        data-qty=""
      >
        <AiOutlineShoppingCart color="white" size={30}></AiOutlineShoppingCart>
      </div>
    </div>
  );
};

export default Navbar;

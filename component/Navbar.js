import Searchbar from "./Searchbar";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="navbar">
      <Searchbar></Searchbar>
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

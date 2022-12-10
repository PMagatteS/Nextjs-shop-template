import { BiArrowBack } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useStateContext } from "../context/useStateContext";
import CartItem from "./CartItem";

const Cart = () => {
const {cartItems, toggleCart, subtotal} = useStateContext()
  return (
    
    <div className="cart-container">
      <div className="cart-overlay"></div>
      <div className="cart">
        <div className="cart-banner">
          <BiArrowBack className="cart-back" onClick={toggleCart}></BiArrowBack>
          <h2 className="subtotal">Subtotal: ${subtotal.toFixed(2)} </h2>
        </div>
        {cartItems.map((el, index) => <CartItem item={el} index={index} key={index}></CartItem> )}
        {cartItems.length > 0 ? (
          <div className="checkout">
            <button className="checkout-button">Proceed to checkout</button>
          </div>
        ) : (
          <div className="empty">
            <BsFillCartPlusFill
              className="empty-cart"
              onClick={toggleCart}
            ></BsFillCartPlusFill>
            <h2>Your cart is empty</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

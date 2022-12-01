import { BiArrowBack } from "react-icons/bi";
import { BsFillCartPlusFill } from "react-icons/bs";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-overlay"></div>
      <div className="cart">
        <div className="cart-banner">
          <BiArrowBack className="cart-back"></BiArrowBack>

          <h2 className="subtotal">Subtotal: $</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;

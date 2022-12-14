import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import { useStateContext } from "../context/useStateContext";

const CartItem = ({item, index}) => {
 const {removeCartItem, updateCartItem} = useStateContext()
  return (
    <div className="cart-items">
      <div className="cart-image">
        {/* will replace with next image */}
        <img src={item.image} alt="" />
      </div>
      <div className="name-quantity">
        <p className="title">{item.title}</p>
        <p className="quantity">
          <span >
            <AiOutlineMinus className="minus" onClick={() =>updateCartItem(item, "decrease")}/>
          </span>
          <span className="product-quantity">{item.quantity}</span>
          <span  >
            <AiOutlinePlus className="plus" onClick={() =>updateCartItem(item, "increase")}/>
          </span>
        </p>
      </div>
      <div className="total">Total: ${item.price*item.quantity}</div>
      <div className="delete">
        <AiOutlineCloseCircle
          className="delete-icon"
          onClick={() => removeCartItem(item, index)}
        ></AiOutlineCloseCircle>
      </div>
    </div>
  );
};

export default CartItem;

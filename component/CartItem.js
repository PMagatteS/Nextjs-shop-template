import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineCloseCircle,
} from "react-icons/ai";

const CartItem = ({item:{quantity, title, image}}) => {
 
  return (
    <div className="cart-items">
      <div className="cart-image">
        {/* will replace with next image */}
        <img src={image} alt="" />
      </div>
      <div className="name-quantity">
        <p className="title">{title}</p>
        <p className="quantity">
          <span className="minus">
            <AiOutlineMinus />
          </span>
          <span className="product-quantity">{quantity}</span>
          <span className="plus" >
            <AiOutlinePlus />
          </span>
        </p>
      </div>
      <div className="total">Total: $</div>
      <div className="delete">
        <AiOutlineCloseCircle
          className="delete-icon"
        ></AiOutlineCloseCircle>
      </div>
    </div>
  );
};

export default CartItem;

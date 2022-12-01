import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


const Card = () => {
   return (
    <div className="card">
      <div className="card-img">
        {/* will replace with next image */}
        <img src="" alt="" />
      </div>
      <p className="title"></p>
      <div className="product-price">
        <p className="price"></p>
        <p className="quantity">
          <span className="minus">
            <AiOutlineMinus />
          </span>
          <span className="product-quantity"></span>
          <span className="plus">
            <AiOutlinePlus />
          </span>
        </p>
      </div>
      <button className="add-to-cart" onClick={addToCart}>
        add to cart
      </button>
    </div>
  );
};

export default Card;

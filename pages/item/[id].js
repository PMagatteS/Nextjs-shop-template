import React from 'react';
import Layout from '../../component/Layout'
import style  from "../../styles/Item.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import ReactStars from "react-rating-stars-component"
import { useStateContext } from '../../context/useStateContext';
import Image from 'next/image';

export const getStaticPaths = async () => {
  const res = await fetch("https://fakestoreapi.com/products?limit=20");
  const data = await res.json()
  const paths =data.map((el) => {return {params:{id: el.id.toString()}}})
  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async  ({params}) => {
  const res = await fetch("https://fakestoreapi.com/products/"+params.id);
  const data = await res.json()
  data.quantity = 1

  return {
      props: {
        item: data
      }
  }
}

export default function Product({item}) {
  const {itemQuantity, setItemQuantity, addCartItem, updateItemQuantity} = useStateContext()
    return (
        <Layout>

           <div className={style.itemGrid}>
  
  <div className={style.itemImage}>
  <Image src={item.image} fill={true} alt={item.title} ></Image>
  </div>
  <div className={style.itemTitle}>
    <h2>
      {item.title}
    </h2>
  </div>
  <div className={style.itemRating}>
    <ReactStars 
    edit={false}
    size={30}
    count={5}
    value={item.rating.rate} >

    </ReactStars>
  </div>
  <div className={style.itemPrice}>
    <p>${item.price}</p>
  </div>
  <div className={style.itemDescription}>{item.description}</div>
 
  <div className={style.itemQuantity}>
          <div>
            <AiOutlineMinus className={style.updateQuantity} onClick={() => updateItemQuantity('decrease')}/>
          </div>
          <p className={style.quantityText}>{itemQuantity}</p>
          <div >

            <AiOutlinePlus className={style.updateQuantity}  onClick={() => updateItemQuantity('increase')}/>
          </div>
        </div>
  
      <button className={style.addToCart} onClick={(e) => addCartItem(false, item, itemQuantity, setItemQuantity)}>Add to cart</button>
     </div>
  
        
     

        </Layout>
    );
};
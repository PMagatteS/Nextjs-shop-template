import React from 'react';
import Layout from '../../component/Layout'
import style  from "../../styles/Item.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";


export default function product() {
    return (
        <Layout>

           <div className={style.itemGrid}>
  
  <div className={style.itemImage}>
    <img src=""/>
  </div>
  <div class={style.itemTitle}>
    <h2>
      title
    </h2>
  </div>
  <div class={style.itemRating}>
    rating
  </div>
  <div class={style.itemPrice}>
    <p>price</p>
  </div>
  <div class={style.itemDescription}>description</div>
 
  <div className={style.itemQuantity}>
          <div>
            <AiOutlineMinus className={style.updateQuantity} onClick={null} size={40}/>
          </div>
          <p className={style.quantityText}>{1}</p>
          <div >

            <AiOutlinePlus className={style.updateQuantity}  onClick={null}/>
          </div>
        </div>
  
      <button class={style.addToCart}>Add to cart</button>
     </div>
  
        
     

        </Layout>
    );
};
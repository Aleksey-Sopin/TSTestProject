import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import styles from './cart.module.scss';

type ContentItemType = {
  id: number;
  scrUrl: string;
  price: string;
  description: string;
  weight: string;
}
type PropsType = {
  productId: number;
}
const Index:React.FC<PropsType> = ({productId}) => {

  const [item, setItem] = useState<ContentItemType[]>();
  const navigate = useNavigate();

  const Cartitems:ContentItemType[] = [];

  useEffect(()=>{
    async function fetchCategories() {
      try {
        const {data} = await axios.get<ContentItemType[]>(`https://650702eb3a38daf4803efe01.mockapi.io/products?id=${productId}`);
        Cartitems.push(...data);
        setItem(Cartitems)
      } catch (error) {
        navigate('/');
      }
    }
    fetchCategories();
  },[productId])

  return (
    <div className={styles.container__cart}>

        <div className={styles.title_block}>
          <div className={styles.title}>
            Корзина
          </div>
          <div className={styles.count}>0</div>
        </div>

        <ul className={styles.list}>

          {item?.map((cartItem) => (
            
            <li key={cartItem.scrUrl} className={styles.item}>
              <div className={styles.product_block}>
                <img src="products/photo-1.png" alt="product" />
                <div className={styles.product_descr}>
                  <div className={styles.product_title}>{cartItem.description}</div>
                  <div className={styles.product_weight}>{cartItem.weight} gramm</div>
                  <div className={styles.product_price}>{cartItem.price} ₴</div>
                </div>
              </div>
              <div className={styles.item_count}> <span>-</span> <p>1</p> <span>+</span> </div>
            </li> 
          ))}
        </ul>

        <div className={styles.summ_block}>
          <div className={styles.summ_title}>Всього:</div>
          <div className={styles.summ_count}>1233 ₴</div>
        </div>

        <button className={styles.cart_button}>Оформити замовлення</button>

        <div className={styles.delivery}>
          <img className={styles.delivery__img} src="delivery-icon.svg" alt="delivery-icon" />
          <p className={styles.delivery__text}>Безкоштовна доставка</p>
        </div>
    </div>
  )
}

export default Index

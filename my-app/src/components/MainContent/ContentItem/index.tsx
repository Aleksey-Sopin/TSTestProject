import { useDispatch } from 'react-redux';
import { addItem } from '../../../redux/cart/slice';
import { CartItem } from '../../../redux/cart/types';
import styles from './contentItem.module.scss';

import React from 'react'

type ContentItemType = {
    id: number;
    scrUrl: string;
    price: number;
    description: string;
    weight: string;
    count: number;
  }

const Index: React.FC<ContentItemType> = ({id, scrUrl, price, description, weight}) => {
 
  const dispatch = useDispatch();

  const onClickAdd = () => {
    const item: CartItem = {
      id,
      price,
      scrUrl,
      description,
      weight,
      count: 0,
    };
    dispatch(addItem(item));
  };
  
  return (
    <li className={styles.item}>
        <div className={styles.product_block}>
            <img src={scrUrl} alt="product" />
            <div className={styles.product_descr}>
                <div className={styles.product_price}>{price} ₴</div>
                <div className={styles.product_title}>{description}</div>
                <div className={styles.product_weight}>{weight} gramm</div>
            </div>
        </div>
        <button onClick={onClickAdd}  className={styles.content_button}>Додати</button>
    </li>
  )
}

export default Index;

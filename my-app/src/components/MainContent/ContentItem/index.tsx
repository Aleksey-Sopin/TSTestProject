import styles from './contentItem.module.scss';

import React from 'react'

type ContentItemType = {
    id: Number;
    scrUrl: string;
    price: string;
    description: string;
    weight: string;
  }

const index: React.FC <ContentItemType> = ({scrUrl, price, description, weight}) => {
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
        <button className={styles.content_button}>Додати</button>
    </li>
  )
}

export default index;
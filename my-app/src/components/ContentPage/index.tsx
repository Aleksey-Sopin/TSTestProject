import styles from './contentPage.module.scss';

import React from 'react'

type Props = {}

const ContentPage:React.FC = (props: Props) => {
  return (
    <div className={styles.container_content_page}>
      <ul className={styles.list}>
        <li className={styles.item}>
            <div className={styles.product_block}>
            <img src="products/photo-1.png" alt="product" />
              <div className={styles.product_descr}>
                <div className={styles.product_price}>654 ₴</div>
                <div className={styles.product_title}>Супер сирний</div>
                <div className={styles.product_weight}>512 gramm</div>
               
              </div>
            </div>
            <button className={styles.content_button}>Додати</button>
        </li>
        <li className={styles.item}>
            <div className={styles.product_block}>
            <img src="products/photo-6.png" alt="product" />
              <div className={styles.product_descr}>
                <div className={styles.product_price}>654 ₴</div>
                <div className={styles.product_title}>Супер сирний</div>
                <div className={styles.product_weight}>512 gramm</div>
               
              </div>
            </div>
            <button className={styles.content_button}>Додати</button>
        </li>
        <li className={styles.item}>
            <div className={styles.product_block}>
            <img src="products/photo-2.png" alt="product" />
              <div className={styles.product_descr}>
                <div className={styles.product_price}>654 ₴</div>
                <div className={styles.product_title}>Супер сирний</div>
                <div className={styles.product_weight}>512 gramm</div>
               
              </div>
            </div>
            <button className={styles.content_button}>Додати</button>
        </li>
        <li className={styles.item}>
            <div className={styles.product_block}>
            <img src="products/photo-5.png" alt="product" />
              <div className={styles.product_descr}>
                <div className={styles.product_price}>654 ₴</div>
                <div className={styles.product_title}>Супер сирний</div>
                <div className={styles.product_weight}>512 gramm</div>
               
              </div>
            </div>
            <button className={styles.content_button}>Додати</button>
        </li>


        {/*  */}
       
      </ul>
    </div>
  )
}

export default ContentPage
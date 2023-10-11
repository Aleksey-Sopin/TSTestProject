import React from 'react'
import styles from './cart.module.scss';
type Props = {}

const index:React.FC = (props: Props) => {
  return (
    <div className={styles.container__cart}>

        <div className={styles.title_block}>
          <div className={styles.title}>
            Корзина
          </div>
          <div className={styles.count}>0</div>
        </div>

        <ul className={styles.list}>
          {}
          {/* <li className={styles.item}>
            <div className={styles.product_block}>
              <img src="products/photo-1.png" alt="product" />
              <div className={styles.product_descr}>
                <div className={styles.product_title}>Супер сирний</div>
                <div className={styles.product_weight}>512 gramm</div>
                <div className={styles.product_price}>451 ₴</div>
              </div>
            </div>
            <div className={styles.item_count}> <span>-</span> <p>1</p> <span>+</span> </div>
          </li> */}

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

export default index
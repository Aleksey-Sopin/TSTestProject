import React from 'react'
import { useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import styles from './cart.module.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCart } from '../../redux/cart/selectors';

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
const Index:React.FC<PropsType> = () => {
  const navigate = useNavigate();

  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  if (!totalPrice) {
    return <>Cart is empty</>;
  }
  return (
    <div className={styles.container__cart}>

        <div className={styles.title_block}>
          <div className={styles.title}>
            Корзина
          </div>
          <div className={styles.count}>{totalCount}</div>
        </div>

        <ul className={styles.list}>

          {items?.map((cartItem) => (
            
            <li key={nanoid()} className={styles.item}>

              <div className={styles.product_block}>
                <img src={cartItem.scrUrl} alt="product" />
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


export default Index;
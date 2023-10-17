import React from 'react'

import styles from './cart.module.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { selectCart } from '../../redux/cart/selectors';
import { addItem } from '../../redux/cart/slice';
import { useDispatch } from 'react-redux';
import { CartItem as CartItemType } from '../../redux/cart/types';
import { CartItem } from './CartItem';

type CartItemProps = {
  productId: number
};
const Index:React.FC<CartItemProps> = ({}) => {

  
  const { totalPrice, items } = useSelector(selectCart);

  const totalCount = items.reduce((sum: number, item: any) => sum + item.count, 0);

  return (
    <div className={styles.container__cart}>

        <div className={styles.title_block}>
          <div className={styles.title}>
            Корзина
          </div>
          <div className={styles.count}>{totalCount}</div>
        </div>

        <ul className={styles.list}>

            {items.map((item: any) => (
              <CartItem key={item.id} {...item} />
            ))}

        </ul>

        <div className={styles.summ_block}>
          <div className={styles.summ_title}>Всього:</div>
          <div className={styles.summ_count}>{totalPrice} ₴</div>
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
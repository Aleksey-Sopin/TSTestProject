import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, minusItem, removeItem } from '../../redux/cart/slice';
import { CartItem as CartItemType } from '../../redux/cart/types';
import styles from './cart.module.scss';

type CartItemProps = {
  id: number;
  description: string;
  weight: number;
  price: number;
  count: number;
  scrUrl: string;
  productId: number
};

export const CartItem: React.FC<CartItemProps> = ({
  id,
  description,
  weight,
  price,
  count,
  scrUrl,
}) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      } as CartItemType),
    );
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
    if(count == 1) onClickRemove()
  };

  const onClickRemove = () => {
    if (window.confirm('Ви дійсно хочете видалити цей товар?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <li className={styles.item}>

        <div className={styles.product_block}>
        <img src={scrUrl} alt="product" />
        <div className={styles.product_descr}>
            <div className={styles.product_title}>{description}</div>
            <div className={styles.product_weight}>{weight} gramm</div>
            <div className={styles.product_price}>{price} ₴</div>
        </div>
        </div>

        <div className={styles.item_count}> <span onClick={onClickMinus}>-</span> <p>{count}</p> <span onClick={onClickPlus}>+</span> </div>
    </li> 
  )
};

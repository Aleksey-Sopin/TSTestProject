import styles from './footer.module.scss';

import React from 'react'

type Props = {}

export const Footer = (props: Props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.container_footer}>
        <ul className={styles.footer__list}>
          <li className={styles.footer__item_1}>
            <img src="./footer/footer-logo.svg" alt="footer-logo" />
            <div className={styles.copy}>
              © YouMeal, 2022 
              Design: Anastasia Ilina
            </div>
          </li>
          <li className={styles.footer__item_2}>
            <div className={styles.title}>Номер для замовлення</div>
            <div className={styles.phone_block}>
              <div className={styles.phone_icon}></div>
              <div className={styles.phone_number}>+380(96)833-38-11</div>
            </div>
          </li>
          <li className={styles.footer__item_3}>
            <div className={styles.title}>Соціальні мережі</div>
            <div className={styles.icon_block}>
              <div className={styles.insta_icon}></div>
              <div className={styles.telegram_icon}></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
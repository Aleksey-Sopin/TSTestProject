import logo from '../../assets/img/logo.svg';
import pic_big from '../../assets/img/pic-bg-main.svg';
import styles from './Header.module.scss';

type Props = {}

export const Header: React.FC = (props: Props) => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="logo-header" />
      <div className={styles.content_bock}>
        <div className={styles.img_block}>
          <img src={pic_big} alt="pic_big" />
        </div>
        <div className={styles.title_block}>
          <div className={styles.title}>Тільки най-най- <span>смачніші бургери!</span></div>
          <div className={styles.subtitle}>Безкоштовна доставка від 599 ₴</div>
        </div>
      </div>
    </div>
  )
}
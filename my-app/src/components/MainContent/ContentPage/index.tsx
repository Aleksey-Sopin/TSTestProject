import ContentItem from '../ContentItem';
import styles from './contentPage.module.scss';
import React from 'react';

type ContentPageType = {
  id: number;
  scrUrl: string;
  price: number;
  description: string;
  weight: string;
  count: number;
}
type PropsType = {
  products: ContentPageType[];
  handleClickAdd: (id:number) => void;
}
const ContentPage:React.FC<PropsType>= ({products, handleClickAdd}) => {
  
  return (
    <div className={styles.container_content_page}>
      <ul className={styles.list}>

      {products.map((obj:ContentPageType) => <ContentItem key={obj.scrUrl} {...obj}/> )}

      </ul>
    </div>
  )
}

export default ContentPage

import axios from 'axios';
import ContentItem from '../ContentItem/index';
import styles from './contentPage.module.scss';
import React from 'react';

type ContentPageType = {
  id: number;
  scrUrl: string;
  price: string;
  description: string;
  weight: string;
  // handleClickAdd: (id:number) => void;
}
type PropsType = {
  products: ContentPageType[];
  handleClickAdd: (id:number) => void;
}
const ContentPage:React.FC<PropsType>= ({products, handleClickAdd}) => {

  return (
    <div className={styles.container_content_page}>
      <ul className={styles.list}>

      {products.map((obj:ContentPageType) => <ContentItem key={obj.scrUrl} handleClickAdd={(id)=>handleClickAdd(id)} {...obj}/> )}

      </ul>
    </div>
  )
}

export default ContentPage
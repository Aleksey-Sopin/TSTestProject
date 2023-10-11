import axios from 'axios';
import ContentItem from '../ContentItem/index';
import styles from './contentPage.module.scss';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

type ContentItemType = {
  id: Number;
  scrUrl: string;
  price: string;
  description: string;
  weight: string;
}
type PropsType = {
  products: ContentItemType[]
}



const ContentPage:React.FC<PropsType>= ({products}) => {
  // const [products, setProducts] = useState<ContentItemType[]>();

  // const navigate = useNavigate();

  const handleClick = () => {

  }

  // useEffect(() => {
  //   async function fetchCategories() {
  //     try {
  //       const {data} = await axios.get<ContentItemType[]>(`https://650702eb3a38daf4803efe01.mockapi.io/products?search=1`);
  //       setProducts(data);
  //     } catch (error) {
  //       navigate('/');
  //     }
  //   }
  //   fetchCategories();
  // }, []);
  
  // if(!products){
  //   return <>Загрузка...</>;
  // }

  return (
    <div className={styles.container_content_page}>
      <ul className={styles.list}>
      {products.map((obj:ContentItemType) => <ContentItem key={obj.scrUrl} {...obj}/>)}
      </ul>
    </div>
  )
}

export default ContentPage
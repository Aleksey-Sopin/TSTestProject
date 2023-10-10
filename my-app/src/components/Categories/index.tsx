import React, { useEffect, useState } from 'react'
import styles from './categories.module.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CategoryItem from '../CategoryItem';
// type Props = {}

type CategoriesItemType = {
  id: number,
  srcUrl: string,
  name: string
}

const Categories: React.FC = () => {

const navigate = useNavigate();
const [category, setCategory] = useState<CategoriesItemType[]>();

useEffect(() => {
    async function fetchCategories() {
      try {
        const {data} = await axios.get<CategoriesItemType[]>('https://650702eb3a38daf4803efe01.mockapi.io/categories/');
        setCategory(data);
      } catch (error) {
        navigate('/');
      }
    }
    fetchCategories();
  }, []);
  
  if(!category){
    return <>Загрузка...</>;
  }

  return (
      <div className={styles.container}>
        <ul className={styles.list}>
            {category.map((obj:CategoriesItemType) => <CategoryItem key={obj.srcUrl} {...obj}/>)}
        </ul>
       
      </div>
  )
}

export default Categories;
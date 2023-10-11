import React, { useState } from 'react'
import styles from './categories.module.scss';

// type Props = {}

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};
const CategoriesArr = [
  {
    id: 0,
    srcUrl: "icon-category/Бургеры.svg",
    name: "Бургери"
    },
    {
    id: 1,
    srcUrl: "icon-category/Закуски.svg",
    name: "Закуски"
    },
    {
    id: 2,
    srcUrl: "icon-category/Хот-доги.svg",
    name: "Хот-Доги"
    },
    {
    id: 3,
    srcUrl: "icon-category/Комбо.svg",
    name: "Комбо"
    },
    {
    id: 4,
    srcUrl: "icon-category/Шаурма.svg",
    name: "Шаурма"
    },
    {
    id: 5,
    srcUrl: "icon-category/Пицца.svg",
    name: "Піцца"
    },
    {
    id: 6,
    srcUrl: "icon-category/Вок.svg",
    name: "Вок"
    },
    {
    id: 7,
    srcUrl: "icon-category/Десерты.svg",
    name: "Солодощі"
    }
]
const Categories: React.FC<CategoriesProps> = ({ value, onChangeCategory }) => {

  return (
      <div className={styles.container}>
        <ul className={styles.list}>

        {CategoriesArr.map((catElem)=>(
          
          <li key={catElem.id} 
              className={value === catElem.id ? styles.active : styles.item}
              onClick={()=> onChangeCategory(catElem.id)} >
            <div>
              <img src={catElem.srcUrl} alt={catElem.srcUrl} />
              <p>{catElem.name}</p>
            </div>
          </li>
        ))
        }
        </ul>  
      </div>
  )
}

export default Categories;




import React from 'react'

import styles from './CategoryItem.module.scss';

type Props = {
    id: number,
    srcUrl: string,
    name: string    
}

const CategoryItem: React.FC<Props> = ({ srcUrl, name}) => {

  return (
    <li className={styles.item}>
        <a href="/">
            <img src={srcUrl} alt={srcUrl} />
            <p>{name}</p>
        </a>
    </li>
  )
}

export default CategoryItem


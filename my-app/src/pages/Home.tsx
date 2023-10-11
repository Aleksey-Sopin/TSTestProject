import Categories from '../components/Categories';
import Cart from '../components/Cart';
import ContentPage from '../components/MainContent/ContentPage';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type ContentItemType = {
  id: number;
  scrUrl: string;
  price: string;
  description: string;
  weight: string;
}

export default function Home() {
  const [categoryId, setCategoryId] = useState(0)
  const [products, setProducts] = useState<ContentItemType[]>();
  const [productId, setProductId] = useState(0)
  const navigate = useNavigate();
  const categ = categoryId + 1;

  useEffect(() => {
    async function fetchCategories() {
      try {
        const {data} = await axios.get<ContentItemType[]>(`https://650702eb3a38daf4803efe01.mockapi.io/products?category=${categ}`);
        setProducts(data);
      } catch (error) {
        navigate('/');
      }
    }
    fetchCategories();
  }, [categoryId,productId]);

  if(!products){
    return <>Загрузка...</>;
  }

  
  return (
      <> 
        <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />

        <div className="content">
          <Cart productId={productId}/>

        <ContentPage  products={products} handleClickAdd={(id) => setProductId(id)}/>

        </div>
      </>     
  )
}

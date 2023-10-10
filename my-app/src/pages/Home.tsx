import Categories from '../components/Categories';
import Cart from '../components/Cart';
import ContentPage from '../components/MainContent/ContentPage';

type Props = {}

export default function Home({}: Props) {
  return (
      <> 
        <Categories/>
        <div className="content">
          <Cart />
          <ContentPage />

        </div>
      </>     
  )
}
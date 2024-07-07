import { IoSearchSharp } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import ProductInfoCard from '../components/productInfoCard';
import Navbar from '../components/navbar';
import CategoryBar from '../components/categoryBar';
import { useNavigate } from 'react-router-dom';

const HomePage = (props) => {
  const { products, productInfoCards, categories, setSearchText } = props;
  const navigate = useNavigate();
  console.log(products);

  const openSearchPage = () => {
    navigate('/search');
  };

  return (
    <>
      <div className="homepage-root-container">
        <Navbar setSearchText={setSearchText} openSearchPage={openSearchPage} />
        <CategoryBar categories={categories} />

        <div className="homepage-body">
          <img
            src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg"
            className="carousal-image"
          />
          <div className="products-cards-container">
            {productInfoCards.map((elem) => {
              return <ProductInfoCard data={elem} />;
            })}
          </div>
        </div>
      </div>

      {products.map((product) => {
        <div className="product" style={{ backgroundColor: 'white' }}>
          <img src={product.thumbnail} />
          <h5>{product.title}</h5>
        </div>;
      })}
    </>
  );
};

export default HomePage;

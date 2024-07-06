import ReactDOM from 'react-dom/client';
import './globalStyles.css';
import { useEffect, useState } from 'react';
import HomePage from './src/Pages/homePage';
import SearchPage from './src/pages/amazonSearchPage';
import ProductInfo from './src/pages/productInfo';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

const productInfoCards = [
  {
    id: 1,
    title: 'Fantastic Finds for Home',
    products: [
      {
        title: 'Kitchen',
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Kitchen._SY232_CB558654384_.jpg',
      },
      {
        title: 'Home Decor',
        img: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/DskBTFQuadCards/Fuji_BTF_Quad_Cards_2x_Home_decor._SY232_CB558654384_.jpg',
      },
      {
        title: 'Microwaves',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg',
      },
      {
        title: 'Washing Machines',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg',
      },
    ],
  },
  {
    id: 2,
    title: 'Revamp',
    products: [
      {
        title: 'Air Conditioners',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg',
      },
      {
        title: 'Refrigerators',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg',
      },
      {
        title: 'Microwaves',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg',
      },
      {
        title: 'Washing Machines',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg',
      },
    ],
  },
  {
    id: 3,
    title: 'Revamp',
    products: [
      {
        title: 'Air Conditioners',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg',
      },
      {
        title: 'Refrigerators',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg',
      },
      {
        title: 'Microwaves',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg',
      },
      {
        title: 'Washing Machines',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg',
      },
    ],
  },
  {
    id: 4,
    title: 'Revamp',
    products: [
      {
        title: 'Air Conditioners',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-372x232----B08RDL6H79._SY232_CB667322346_.jpg',
      },
      {
        title: 'Refrigerators',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B08345R1ZW---372x232._SY232_CB667322346_.jpg',
      },
      {
        title: 'Microwaves',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/B07G5J5FYP._SY232_CB667322346_.jpg',
      },
      {
        title: 'Washing Machines',
        img: 'https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08CPQVLZT._SY232_CB667322346_.jpg',
      },
    ],
  },
];

const categories = [
  'Fresh',
  'Amazon MiniTV',
  'Sell',
  'Best Sellers',
  'Mobiles',
  'Todays Deals',
  'Prime',
  'Fashion',
  'Electronics',
];

const App = () => {

    const [products, setProducts] = useState([]);

    async function getData() {
        const res = await fetch('https://dummyjson.com/products', {
            method: 'GET',
        });
        const data = await res.json();
        setProducts(data.products);
    }

    useEffect(() => {
        getData();
    }, []);

  const [searchText, setSearchText] = useState('');
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <HomePage
          productInfoCards={productInfoCards}
          products={products}
          categories={categories}
          setSearchText={setSearchText}
        />
      ),
    },
    {
      path: '/search',
      element: (
        <SearchPage
          categories={categories}
          searchText={searchText}
          setSearchText={setSearchText}
        />
      ),
    },
    {
      path: '/search/:id',
      element: <ProductInfo />,
    },
  ]);

  return <RouterProvider router={router} />;
};

root.render(<App />);

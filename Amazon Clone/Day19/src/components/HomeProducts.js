import React from 'react';
import ProductInfoCard from './ProductInfoCards';


const HomeProducts = () => {
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
      title: 'Refresh your space',
      products: [
        {
          title: 'Dining',
          img: 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_LP-HP_B08MYX5Q2W_01.23._SY232_CB619238939_.jpg',
        },
        {
          title: 'Home',
          img: 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_home_B08RCCP3HV_01.23._SY232_CB619238939_.jpg',
        },
        {
          title: 'Kitchen',
          img: 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_kitchen_B0126LMDFK_01.23._SY232_CB619238939_.jpg',
        },
        {
          title: 'Health and Beauty',
          img: 'https://images-na.ssl-images-amazon.com/images/G/01/launchpad/2023/Gateway/January/DesktopQuadCat_372x232_health-beauty_B07662GN57_01.23._SY232_CB619238939_.jpg',
        },
      ],
    },
    {
      id: 3,
      title: 'Amazon Gadget Store',
      products: [
        {
          title: 'Smartphones',
          img: 'https://m.media-amazon.com/images/I/41aF1Kpc1iL._SY320_.jpg',
        },
        {
          title: 'Tablets',
          img: 'https://m.media-amazon.com/images/I/316r7290SLL._SY150_.jpg',
        },
        {
          title: 'Laptops',
          img: 'https://m.media-amazon.com/images/I/31qcGgiIK7L._SY150_.jpg',
        },
        {
          title: 'TVs',
          img: 'https://m.media-amazon.com/images/I/313zteqI9LL._SY150_.jpg',
        },
      ],
    },
    {
      id: 4,
      title: 'Fashion trends you like',
      products: [
        {
          title: 'Jackets',
          img: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_1_x2._SY232_CB595261253_.jpg',
        },
        {
          title: 'Jewlry',
          img: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2023/LuxuryStores/Spring-23/GW/Quad_Cards/Spring/LSS23_SPRING_DT_CAT_CARD_4_x2._SY232_CB595261253_.jpg',
        },
        {
          title: 'Jeans',
          img: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_2x._SY232_CB624172947_.jpg',
        },
        {
          title: 'Shoes',
          img: 'https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_2x._SY232_CB624172947_.jpg',
        },
      ],
    },
  ];
  return (
    <div className='product-cards-main-container'>
      <div className="product-card ">
        {productInfoCards.map((elem) => {
          return (
            <ProductInfoCard
              key={elem.id}
              data={elem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomeProducts;

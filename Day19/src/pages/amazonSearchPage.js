import { useEffect, useState } from "react";
import CategoryBar from "../components/categoryBar";
import Navbar from "../components/navbar";


const SearchPage = (props) => {
    const { categories,searchText,setSearchText } = props;
   
    const [products, setProducts] = useState([]);

    async function getData() {
        // const val = e.target.value;
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const data = await res.json();
        setProducts(data.products);
        console.log(products);
        
    }
    useEffect(()=>{
        getData();
    },[searchText])

    return (
        <>
            <Navbar setSearchText={setSearchText} />
            <CategoryBar categories={categories} />
            <div className="product-cards-container">
            {products.length>0 && products.map((elem) => (
                <div key={elem.id} className="product-card">
                    <h2>{elem.title}</h2>
                    <div>
                        <img src={elem.thumbnail} alt={elem.title} />
                    </div>
                    <p>{elem.description}</p>
                    <p>Price: ${elem.price}</p>
                    <p>Rating: {elem.rating}</p>
                    <p>Stock: {elem.stock}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default SearchPage;



import { useParams } from "react-router-dom";

const ProductInfo =() =>{
    const params = useParams();
    console.log(params);
    return <h1>Info Page {JSON.stringify(params)}</h1>

}
export default ProductInfo;
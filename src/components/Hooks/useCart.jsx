import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetProductByIdMutation } from "../../app/feature/productApi/poductApi";

const useCart = () => {

  const cartItem = useSelector((state) => state?.cart?.cartItems || []);
  // console.log(cartItem);


  const cartProduct = cartItem.map(item => item.id);
  

  
  const [getProductById] = useGetProductByIdMutation();
  const [product, setProduct] = useState([]);

  


  useEffect(() => {
    const fetchProducts = async () => {
      const products = await Promise.all(cartProduct.map((id) => getProductById(id)));  
      return setProduct(products);
    };
    fetchProducts();
  }, [cartProduct ]);

  
   
  

  return { product , cartProduct };
};

export default useCart;  // eslint-disable-line
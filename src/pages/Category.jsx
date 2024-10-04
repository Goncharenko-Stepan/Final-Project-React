import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProductsByCategory } from "../store/ActionCreators";
import { useEffect, useState } from "react";
export const Category = () => {
  const { categoryId } = useParams();

  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByCategory(categoryId)).then((res) =>
      setProducts(res.payload.data)
    );
  }, []);

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
        </div>
      ))}
      ;
    </>
  );
};

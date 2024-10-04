import { Route, Routes } from "react-router-dom";
import { Category, Categories, Home, Products, Product } from "../pages";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories, getProducts } from "../store/ActionCreators";

export const MainRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getProducts());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:categoryId" element={<Category />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<Product />} />
    </Routes>
  );
};

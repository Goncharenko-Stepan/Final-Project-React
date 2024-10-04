import { useDispatch, useSelector } from "react-redux";
import { filteredProducts } from "../store/selectors";
import { Box, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { toggleDiscount } from "../store/reducers/filterSlice";
import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";

export const Sales = () => {
  const products = useSelector(filteredProducts);
  const dispatch = useDispatch();
  const saleDiscount = products.slice(0, 4);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/products");
  };

  useEffect(() => {
    dispatch(toggleDiscount(true));
  }, []);
  console.log(saleDiscount);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "70px", fontWeight: 700, margin: "40px" }}>
          Sale
        </Typography>
        <Button
          onClick={handleButtonClick}
          sx={{
            border: "1px solid #DDDDDD",
            width: "150px",
            height: "40px",
            color: "#DDDDDD",
          }}
        >
          All sales
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {saleDiscount.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </Box>
    </Box>
  );
};

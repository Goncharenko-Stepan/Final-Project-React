import { Stack, Box, Typography } from "@mui/material";
import { baseUrl } from "../store/ActionCreators";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
          borderRadius: "10px",
          padding: "20px",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "400px",
            overflow: "hidden",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        >
          <img
            alt={`${product.title}`}
            src={`${baseUrl}${product.image}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography variant="h6" textAlign="center">
          {product.title}
        </Typography>
      </Stack>
    </Link>
  );
};

import { useSelector } from "react-redux";
import { getCategories } from "../store/selectors";
import { Layout } from "../layouts/Layout";
import { Typography, Box, Button } from "@mui/material";
import { CategoryCard } from "../components/CategoryCard";
import { useNavigate } from "react-router-dom";

export const Categories = () => {
  const categories = useSelector(getCategories);

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <Typography
            sx={{ fontSize: "70px", fontWeight: 700, margin: "40px" }}
          >
            Categories
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "auto",
          }}
        >
          {categories.map((category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </Box>
      </Box>
    </Layout>
  );
};

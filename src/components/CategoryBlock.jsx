import { Box, Typography, Button } from "@mui/material";
import { CategoryCard } from "./CategoryCard";
import { useNavigate } from "react-router-dom";

export const CategoryBlock = ({ categories }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/categories");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: "70px", fontWeight: 700, margin: "40px" }}>
          Categories
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
          All categories
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </Box>
    </Box>
  );
};

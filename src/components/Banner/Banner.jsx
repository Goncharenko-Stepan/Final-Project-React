import { Container, Box, Button, Typography } from "@mui/material";
import bannerDog from "../../assets/bannerDog.svg";

export const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerDog})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "90vh",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <Typography
          sx={{
            marginTop: "5%",
            fontSize: "100px",
            fontWeight: 700,
            color: "#fff",
            width: "1300px",
          }}
        >
          Amazing Discounts on Pets Products!
        </Typography>
        <Button
          sx={{
            backgroundColor: "#0D50FF",
            width: "200px",
            height: "50px",
            borderRadius: "10px",
            color: "#fff",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          Check out
        </Button>
      </Container>
    </Box>
  );
};

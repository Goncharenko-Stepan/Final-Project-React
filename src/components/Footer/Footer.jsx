import { Box, Container, Typography } from "@mui/material";
import instagram from "../../assets/ic-instagram.svg";
import whatsapp from "../../assets/ic-whatsapp.svg";
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <Container>
      <Typography sx={{ fontSize: "70px", fontWeight: 700, margin: "40px" }}>
        Contacts
      </Typography>

      <Box
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              height: "120px",
              width: "700px",
              display: "flex",
              justifyContent: "start",
              padding: "30px",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "13px", opacity: "0.7" }}>
              Phone
            </Typography>
            <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
              +49 30 915-88492
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              height: "120px",
              width: "500px",
              display: "flex",
              justifyContent: "start",
              padding: "30px",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "13px", opacity: "0.7" }}>
              Socials
            </Typography>
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: 700,
                display: "flex",
                gap: "10px",
              }}
            >
              <img src={instagram} alt="instagram" />
              <img src={whatsapp} alt="whatsapp" />
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            gap: "20px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              height: "150px",
              width: "700px",
              display: "flex",
              justifyContent: "start",
              padding: "30px",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "13px", opacity: "0.7" }}>
              Address
            </Typography>
            <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
              Wallstraẞe 9-13, 10179 Berlin, Deutschland
            </Typography>
          </Box>

          <Box
            sx={{
              backgroundColor: "#f5f5f5",
              borderRadius: "10px",
              height: "150px",
              width: "500px",
              display: "flex",
              justifyContent: "start",
              padding: "30px",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ fontSize: "13px", opacity: "0.7" }}>
              Working Hours
            </Typography>
            <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
              24 hours a day
            </Typography>
          </Box>
        </Box>
      </Box>
      <iframe
        className={s.mapGoogle}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.2302640007133!2d13.4046434!3d52.51117179999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e27db3d613b%3A0x8fa6d253500b289f!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sbe!4v1726944121552!5m2!1sen!2sbe"
        width="600"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
  );
};

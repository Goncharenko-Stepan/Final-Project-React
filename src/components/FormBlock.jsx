import { TextField, Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendData } from "../store/ActionCreators";
import { Box } from "@mui/material";
import imageForm from "../assets/imageForm.svg";

const defaultData = {
  name: "",
  phoneNum: "",
  email: "",
};

export const FormBlock = () => {
  const [data, setData] = useState(defaultData);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(sendData(data));
  };

  return (
    <Box
      sx={{
        backgroundColor: "#0D50FF",
        padding: "40px 20px",
        borderRadius: "12px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            marginBottom: "20px",
            textAlign: "left",
            fontWeight: "bold",
          }}
        >
          5% off on the first order
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={imageForm}
              alt="Form image"
              style={{
                width: "150%",
                maxWidth: "650px",
                objectFit: "contain",
              }}
            />
          </Box>

          <Box
            sx={{
              flex: 1,
              paddingLeft: "40px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <form onSubmit={onSubmit}>
              <TextField
                variant="outlined"
                fullWidth
                label="Name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                sx={{
                  marginBottom: "20px",
                  borderRadius: "8px",

                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "gray",
                    },
                  },

                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Phone number"
                value={data.phoneNum}
                onChange={(e) => setData({ ...data, phoneNum: e.target.value })}
                sx={{
                  marginBottom: "20px",
                  borderRadius: "8px",

                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "gray",
                    },
                  },

                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                }}
              />
              <TextField
                fullWidth
                label="Email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                sx={{
                  marginBottom: "20px",
                  borderRadius: "8px",

                  "& .MuiOutlinedInput-root": {
                    color: "white",
                    "& fieldset": {
                      borderColor: "white",
                    },
                    "&:hover fieldset": {
                      borderColor: "gray",
                    },
                  },

                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                }}
              />
              <Button
                fullWidth
                sx={{
                  backgroundColor: "#fff",
                  color: "black",
                  padding: "10px 0",
                  borderRadius: "8px",
                  fontWeight: "bold",
                  "&:hover": {
                    backgroundColor: "black",
                    color: "#fff",
                    border: "none",
                  },
                }}
                type="submit"
              >
                Get a discount
              </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

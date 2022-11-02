import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import icon1 from "../../images/icon1.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon3.png";
import Vector from "../../images/Vector1.png";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "green",
  padding: "30px 50px",
  paddingBottom: 40,
  textAlign: "center",
  color: "#fff",
  borderRadius: 15,
  position: "relative",
  height: "100%",
  maxWidth: 320,
}));

export default function Card2() {
  return (
    <Box
      sx={{
        py: 5,
        mx: { xs: "15%", md: "10%" },
      }}
    >
      <ul>
        <Typography
          component="li"
          variant="h5"
          sx={{ pb: 5, textAlign: "left",
        ml:2
        }}
        >
          Почему стоит доверять обучение нам?
        </Typography>
      </ul>
      <Grid container spacing={10} align="center">
        {category.map((itemCard, i) => {
          return (
            <Grid item xs={12} md={4} 
            key={i}>
              <Item>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ maxWidth: 200, 
                    textAlign: "center", mb: 2 }}
                >
                  {itemCard.name}
                </Typography>
                <img src={itemCard.img} alt="img" width="100%" />
                <Typography
                  component="div"
                  variant="p"
                  align="right"
                  color="black"
                  position="absolute"
                  sx={{
                    bottom: 25,
                    right: 40,
                  }}
                >
                  Подробнее
                </Typography>

                <img
                  src={Vector}
                  style={{
                    position: "absolute",
                    bottom: 30,
                    right: -30,
                  }}
                  alt="img"
                  width="70px"
                />
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

const category = [
  { img: icon1, name: "Практикующие преподователи" },
  { img: icon2, name: "Актуальная программа" },
  { img: icon3, name: "Обучение на практике" },
];

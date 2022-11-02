import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import icon1 from "../../images/flutter.png";
import icon2 from "../../images/be1.png";
import icon3 from "../../images/be2.png";
import icon4 from "../../images/be3.png";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  padding: "30px 40px",
  paddingBottom: 40,
  textAlign: "left",
  color: "black",
  borderRadius: 15,
  position: "relative",
  height: "100%",
  maxWidth: 340,
}));

export default function Card4() {
  return (
    <Box
      sx={{
        py: 5,
        mx: { xs: "5%", md: "10%" },
      }}
    >
      <ul>
        <Typography
          component="li"
          variant="h5"
          sx={{ pb: 5, textAlign: "left", ml: 2 }}
        >
          Наши курсы
        </Typography>
      </ul>
      <Grid container spacing={2} align="center">
        {category.map((itemCard, i) => {
          return (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <Item>
                <img src={itemCard.img} alt="img" width="50px" />
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ maxWidth: 200, mb: 2 }}
                >
                  {itemCard.name}
                </Typography>
                <Typography
                  component="div"
                  variant="p"
                >
                  {itemCard.text}
                </Typography>
              </Item>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

const category = [
  {
    img: icon1,
    name: "Flutter",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    img: icon2,
    name: "Back-end",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    img: icon3,
    name: "Back-end",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
  {
    img: icon4,
    name: "Back-end",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
  },
];

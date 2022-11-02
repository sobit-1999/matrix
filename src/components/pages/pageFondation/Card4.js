import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper2 from "@mui/material/Paper";
import { ArrowForward } from "@mui/icons-material";
import icon from "../../images/Vect.png";


const Item = styled(Paper2)(({ theme }) => ({
  background: "none",
  maxWidth: 300,
  display: 'flex',
  alignItems: "center",
  boxShadow: "none",
}));
export default function Card4() {
  return (
    <Box
      sx={{
        px: { xs: "5%", md: "15%" },
        py: 2,
      }}
    >
      <Typography
        component="div"
        variant="h3"
        sx={{
          color: "green",
          mt: 3,
          fontWeight: { md: "600", xs: "500" },
          fontSize: { xs: 35, md: 50 },
        }}
      >Bu kurs kimlar uchun?
      </Typography>
      <Typography
        component="div"
        variant="p"
        sx={{
          mb: 2,
          color: "rgb(175,175,175)",
        }}
      >
        *barchasi bugundan boshlanadi!
      </Typography>
      <Grid container spacing={2}>
        {category.map((item, i) => {
          return (
            <Grid item xs={12} md={6} key={i}>
              <Item>
                <IconButton
                >
                <img src={icon} alt="icon" width="20px"/>
                                    </IconButton>
                <Typography
                  component="div"
                  variant="p"
                  sx={{
                    ml: 2,
                    color:"black"
                  }}
                >
                  {item}
                </Typography>
              </Item>
            </Grid>
          );
        })}
      </Grid>
            
<Box sx={{display: "flex", alignItems: "center",
my:3,
mt:4,
justifyContent: "right"
}}>
        <Typography 
component="div"
variant="h6"
sx={{
  mx: 2,
  color: "green"}}
>
kursga qatnashmoqchiman </Typography>
  <IconButton
  sx={{background: "green",
":hover": {
    background: "green"
}
}}
  >
    <ArrowForward />
  </IconButton>

  </Box>
  
    </Box>
  );
}

const category = [
  "Yoshlar uchun",
  "Ko'p daromad olishni istaganlar uchun",
  "Rivojlanishni istaganlar uchun",
  "Boshlang'ich dasturchilar uchun ",
  "Texnologlar uchun",
  "Kelajak haqida o'ylaydigan har bir kishi uchun",
  "IT Dasturchi boʻlishga qaror qilganlar uchun",
  "IT yo’nalishi bilan tanishmoqchi bo’lganlar uchun"
];

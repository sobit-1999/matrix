import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
// import imgHome from "../../images/Group.png";
import imgHome2 from "../../images/Rectangle.png";
import { styled } from "@mui/material/styles";
import Paper2 from "@mui/material/Paper";
import { ArrowForward } from "@mui/icons-material";
// import Grid from '@mui/material/Grid';

const styles2 = {
  paperContainer: {
    backgroundImage: `url(${imgHome2})`,
    width: "100%",
    backgroundColor: "rgba(0, 20, 0, 0.99)",
    paddingY: "50x",
  },
};

const Item = styled(Paper2)(({ theme }) => ({
  background: "none",
  color: "#fff",
  maxWidth: 300,
}));
export default function Card3() {
  return (
    <Box
      style={styles2.paperContainer}
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
      >
        IT-mutaxassis kim?
      </Typography>
      <Typography
        component="div"
        variant="p"
        sx={{
          mb: 1,
          color: "rgb(175,175,175)",
        }}
      >
        *o’zingizni qayta kashf qiling!
      </Typography>
      <Typography
        component="div"
        variant="h6"
        sx={{
          mt: 5,
          color: "rgb(175,175,175)",
        }}
      >
        <span style={{ fontWeight: "800", color: "#fff" }}>
          {" "}
          IT mutaxassisi{" "}
        </span>{" "}
        dasturiy ta'minotni ishlab chiqish va kompyuter texnologiyalaridan
        foydalanish bilan bog'liq 500 dan ortiq raqamli kasblardan biridir.
        Globallashuv IT-sanoatini eng yuqori maoshli sohalardan biriga
        aylantirdi: kompaniyalar yaxshi mutaxassislar uchun xorijliklar bilan
        raqobatlashishga majbur. Iqtisodiyot va kundalik hayot tobora raqamli
        bo'lib bormoqda, shuning uchun IT sohasiga talab tobora ortmoqda.
        (tekstni qisqartirish kerak)
      </Typography>
      <Typography
        component="div"
        variant="h5"
        sx={{
          my: 3,
          textAlign: "center",
          color: "#fff",
        }}
      >
        IT mutaxassislikni egallash uchun 3 FAKT
      </Typography>
      <Grid container spacing={2}>
        {category.map((item, i) => {
          return (
            <Grid item xs={12} md={4} key={i}>
              <Item>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{
                    textAlign: { xs: "left", md: "center" },
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  component="div"
                  variant="p"
                  sx={{
                    my: 2,
                    paddingX: { xs: "5px", md: "18%" },
                    textAlign: {
                      xs: "left",
                      md: "center",
                      color: "rgb(175,175,175)",
                    },
                  }}
                >
                  {item.text}
                </Typography>

                {item.link && (
                  <Typography
                    component="div"
                    variant="p"
                    sx={{ textAlign: "right", color: "rgb(175,75,75)" }}
                  >
                    {item.link}
                  </Typography>
                )}
              </Item>
            </Grid>
          );
        })}
      </Grid>
            
<Box sx={{display: "flex", alignItems: "center",
my:3,
mt:5,
justifyContent: "right"
}}>
        <Typography 
component="div"
variant="h6"
sx={{
  mx: 2,
  color: "green"}}
>
IT mutaxassikni egallash  </Typography>
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
  {
    name: "Talablar",
    text: `2021-yilda IT-bozoridagi 
    bo‘sh ish o‘rinlari soni 
    72 foizga oshdi. Rezyumelar 
    soni - atigi 6%`,
    link: "Manbaa: hh.uz",
  },
  {
    name: "Kelajagi",
    text: `Hozirda har bir soha IT sohasi orqali qurulmoqda
    va IT kasblar boshqa kasblarga 
    nisbatan talab kun sayin kuchaymoqda`,
  },
  {
    name: "Yuqori maosh",
    text: `Yangi IT-mutaxassisning maoshi 4 000 000 so'm. Uch yildan 
      keyin esa - 21 000 000 so'mga 
      to’g’ri kelmoqda`,
    link: "Manbaa: hh.uz",
  },
];

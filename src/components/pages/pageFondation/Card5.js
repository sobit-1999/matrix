import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import imgHome2 from "../../images/Rectangle.png";

import icon from "../../images/icon5.png";
import icon1 from "../../images/Icon11.png";
import icon2 from "../../images/Icon22.png";
import icon3 from "../../images/Icon33.png";
import icon4 from "../../images/Icon44.png";
import icon5 from "../../images/Icon55.png";
import icon6 from "../../images/Icin66.png";
import { styled } from "@mui/material/styles";
import Paper2 from "@mui/material/Paper";
import { ArrowForward } from "@mui/icons-material";

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
  display:"flex",
  alignItems: "center",
  marginTop: 5
}));
export default function Card5() {
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
          textAlign: 'center'
        }}
      >4 oylik kursda sizni kutiladi
      </Typography>
      <Typography
        component="div"
        variant="p"
        sx={{
          mb: 1,
          color: "rgb(175,175,175)",
          textAlign: 'center'
        }}
      >*bugungi kundagi mutaxassis bir paytlar boshlang'ich edi
      </Typography>
      <Grid container spacing={2}>
        {category.map((item, i) => {
          return (
            <Grid item xs={12} md={4} key={i}>
              <Item>

                <img alt="img" src={icon} width="30px" />
<Box sx={{ml:3}}>
                <Typography
                  component="div"
                  variant="h6"
                >
                  {item.name}
                </Typography>
                {item.text&&
                <Typography
                  component="div"
                  variant="p"
                  sx={{  
color: "rgb(175,175,175)",
                  }}
                >
                  {item.text}
                </Typography>
}</Box>
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
      name: "48 dars",
    },
    {
      name: "Atmasfera",
      text: `Kurs jarayonida katta jamoa bilan organasiz`,
    },
    {
      name: "Platforma",
      text: `
      qulay platformada kurs 
      jarayonlarni olib borasiz`,
    },
  ];
  const category2 = [
    {
        img: "",
      name: "48 dars",
      text: ""
    },
    {
      name: "Atmasfera",
      text: `Kurs jarayonida katta jamoa bilan organasiz`,
    },
    {
      name: "Platforma",
      text: `
      qulay platformada kurs 
      jarayonlarni olib borasiz`,
    },
  ];

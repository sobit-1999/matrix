import { Box, Button, Grid, IconButton, Paper, Typography } from "@mui/material";
import React from "react";
import imgHome from "../../images/Background.png";
import imgHome2 from "../../images/Rectangle.png";
import logo from "../../images/logo.png";
import { ArrowForward } from "@mui/icons-material";
import SidebarFoundation from "../../sidebar/SidebarFoundation";

const styles = {
  paperContainer: {
    backgroundImage: `url(${imgHome})`,
    width: "100%",
    backgroundColor: "rgba(0, 20, 0, 0.99)",
  },
};
const styles2 = {
  paperContainer: {
    backgroundImage: `url(${imgHome2})`,
    width: "100%",
  },
};
export default function Card1() {
  return (
    <Box style={styles.paperContainer}>
      <Box
        style={styles2.paperContainer}
        sx={{ paddingX: { xs: "5%", md: "15%" }, pb: 5 }}
      >
        <Box sx={{ display: "flex", color: "#fff", pt: 3,
      justifyContent: {xs: "space-between", md: "left"}
      }}>
          <img alt="img" src={logo} width="80px" />
          {category.map((item, i) => {
            return (
              <Typography
                component="div"
                variant="h6"
                key={i}
                sx={{
                  ml: "5%",
                  cursor: "pointer",
                  ":hover": {
                    color: "rgb(25,125,125)",
                  },
                  display: {xs: "none", md: "block"}
                }}
              >
                {item}
              </Typography>
            );
          })}
          <IconButton sx={{color: "#fff"}}>
            <SidebarFoundation data={category} />
          </IconButton>
        </Box>
        <Typography
          component="div"
          variant="h3"
          sx={{
            color: "green",
            mt: 6,
            fontWeight:{ md: "600", xs: "500" },
            fontSize: {xs: 35, md: 55}
                    }}
        >
          Atiga 4 oyda SIZ
        </Typography>
        <Typography
          component="div"
          variant="p"
          sx={{
            color: "rgb(175,175,175)",
            mt: 2,
            mb: 1
          }}
        >
         <span style={{color:"#fff", fontSize: "20px"}}> Foundation</span> kursiga qatnashib kuratorlar va murabbiylar bilan bir
          jamoada 
          
          </Typography>
        <Typography
          component="div"
          variant="p"
          sx={{
            color: "rgb(175,175,175)",
          }}
        >
          NOLdan Dasturlash asoslarini o’rganasiz va IT mutaxassislik
          darajasiga ko’tarila boshlang
        </Typography>
        <Typography
          component="div"
          variant="h6"
          sx={{
            color: "rgb(175,175,175)",
            background: "rgba(175,175,175, 0.1)",
            padding: "5px 20px",
            borderRadius: 8,
            mt: 3,
            maxWidth: 450
          }}
        >Uydan chiqmasdan turib<span style={{color: "green"}}> ONLINE </span> o’rganing
        </Typography>
<Box sx={{display: "flex", alignItems: "center",
my:3
}}>
        <Button 
        sx={{
          background: "green",
          borderRadius: 5,
          px: 2,
          color: "black",
          ":hover": {
            background: "green"
          }
        }}
        >
          Kursga yozilish
        </Button>
        <Typography 
component="div"
variant="h6"
sx={{
  mx: 2,
  color: "green"}}
>
batafsil
  </Typography>
  <IconButton
  sx={{background: "green",
  ":hover": {
      background: "green"
  }}}
  >
    <ArrowForward />
  </IconButton>

  </Box>
  <Typography
  component="div"
  variant="p"
  sx={{color: "rgb(175,175,175)",
mt: 8
}}
  >
  yangi kurs ochilishiga start berilish kuni: <span style={{color: "#fff"}}> 7 kunu / 10:58 soat qoldi</span>
  </Typography>
      </Box>
    </Box>
  );
}

const category = ["Kurs haqida", "IT-mutahasisi kim", "Tariflar", "FAQ"];

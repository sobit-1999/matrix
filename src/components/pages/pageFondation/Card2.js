import { Box, IconButton, Typography } from "@mui/material";
import React from "react";
import { ArrowForward } from "@mui/icons-material";

export default function Card2() {
  return (
    <Box
    sx={{mx: {xs: "5%", md: "15%"}}}
    >
        <Typography
          component="div"
          variant="h3"
          sx={{
            color: "green",
            mt: 4,
            fontWeight:{ md: "600", xs: "500" },
            fontSize: {xs: 35, md: 50}
                    }}
        >Kurs haqida
        </Typography>
        <Typography
          component="div"
          variant="p"
          sx={{
            mb: 1
          }}
        >
         *muvaffaqiyat siri birinchi qadamni qo'yishdir          
          </Typography>
        <Typography
          component="div"
          variant="h6"
          sx={{
            mt: 5
          }}
        ><span style={{fontWeight: "800"}}> Foundation Dasturlash </span> kursida asosiy dasturlash tillarini yani C++ va Python 
        hamda ular orqali dasturlashning mantiq-mohiyati o’rgatiladi.
        <br/><br/>

        Atigi 4 oyda SIZ dasturlashning fundamental bilimlar, dasturchiga kerak bo’ladigan
        barcha instrumentlar va ma’lumotlar bazasi bilan tez ishlash jarayonilarini o’rganasiz.
        <br/><br/>
        Foundation Dasturlashning asoslari kursi - mutaxasislikka tayyorlov kursi bo’lib,
        IT mutaxassislikka ilk qadam hisoblanadi.
        </Typography>

        
<Box sx={{display: "flex", alignItems: "center",
my:3,
justifyContent: "right"
}}>
        <Typography 
component="div"
variant="h6"
sx={{
  mx: 2,
  color: "green"}}
>
ilk qadam qo’yish
  </Typography>
  <IconButton
  sx={{background: "green",
color: "#fff",
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

const category = ["Kurs haqida", "IT-mutahasisi kim", "Tariflar", "FAQ"];

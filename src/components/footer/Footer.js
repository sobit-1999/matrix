import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import React from "react";
import logo from "../images/logo.png";
import { Typography } from "@mui/material";
import { CallOutlined, LocationOnOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Location from "./Location";

const Item = styled(Paper)(({ theme }) => ({
  color: "#fff",
  padding: theme.spacing(1),
  background: "#000",
}));

const LocationCard = styled(Paper)(({ theme }) => ({
    color: "#fff",
    background: "#000",
    marginTop: {md: "-50px", xs: 0}
  }));
export default function Footer() {
  return (
    <Box sx={{ background: "black", padding: "50px 15%" }}>
      <Box align="center" mb="20px">
        <img alt="logo" src={logo} />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2}>
          <Item>
            {callCategory.map((item, i) => {
              return (
                <Typography component="div" variant="h6">
                  <Link style={{ color: "#fff" }} to={item.link}>
                    {item.name}
                  </Link>
                </Typography>
              );
            })}
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CallOutlined />
              <Typography component="div" variant="h6"
               sx={{ml:1}}>
                +998 99125 14 22
              </Typography>
            </Box>
            <Box sx={{ display: "flex", 
            alignItems: "center",
            mt:1
            }}>
              <CallOutlined />
              <Typography component="div" variant="h6"
               sx={{ml:1}}
               >
                +998 99125 14 22
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={3}>
          <Item>

            <Box 
            sx={{display: "flex",
        
        alignItems: "top"}}
            >
                <LocationOnOutlined />
                <Typography
                component="div"
                variant="h6"
                sx={{ml: 1}}
                >03124, Киев,
бульвар Вацлава Гавела, 4, корпус 2, офис 430</Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={12} md={4}>
          <LocationCard><Location /></LocationCard>
        </Grid>
      </Grid>
    </Box>
  );
}

const callCategory = [
  { name: "Курсы", link: "#" },
  { name: "Контакты", link: "#" },
  { name: "FAQ", link: "#" },
];

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {
  Card,
  Divider,
  Grid,
  Tooltip,
  tooltipClasses,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { CallOutlined, Instagram, Menu, Telegram } from "@mui/icons-material";
import logo from "../images/logo.png";
import SidebarAppPhone from "../sidebar/Sidebar";


const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: 18,
    maxWidth: "none",
    padding: 0,
  },
}));

export default function Header() {
  const [check, setCheck] = React.useState(true);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        sx={{
          padding: "10px 10%",
          background: "rgba(255, 255, 255, 0)",
          color: "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={3} textAlign="left">
            <img src={logo} alt="logo" width="150px"/>
          </Grid>
          <Grid
            item
            xs={7}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: {xs: "none", md: "flex"}
            }}
          >
            {Category.map((item, i) => {
              return (
                <LightTooltip
                  arrow={true}
                  key={i}
                  title={
                    <Card sx={{ display: "flex", flexWrap: "wrap" }}>
                      {item.catalog.map((item2, i2) => {
                        return (
                          <Box key={i2} sx={{ margin: "20px 50px" }}>
                            <Divider sx={{ mb: 1 }} />
                            <Typography
                              component="div"
                              variant="h6"
                              sx={{ mb: 4 }}
                            >
                              {item2.catalogName}
                            </Typography>
                            {item2.catalogLink.map((item3, i3) => {
                              return (
                                <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                                  <Typography
                                    component="div"
                                    variant="p"
                                    key={i3}
                                    sx={{
                                      my: 1,
                                      display: "flex",
                                      flexWrap: "wrap",
                                    }}
                                  >
                                    {i3 + 1}
                                    <Link
                                      style={{ marginLeft: "15px" }}
                                      to={item3.link}
                                    >
                                      {item3.name}
                                    </Link>
                                  </Typography>
                                </Box>
                              );
                            })}
                          </Box>
                        );
                      })}
                    </Card>
                  }
                >
                  <Box sx={{ position: "relative" }}>
                    <Typography
                      sx={{ mx: 3 }}
                      key={i}
                      component="div"
                      variant="h6"
                    >
                      {item.categoryName}
                    </Typography>

                    <Typography
                      component="div"
                      variant="p"
                      sx={{
                        position: "absolute",
                        top: -6,
                        right: 0,
                      }}
                    >
                      01
                    </Typography>
                  </Box>
                </LightTooltip>
              );
            })}

            <Box sx={{ position: "relative" }}>
              <Typography sx={{ mx: 3 }} component="div" variant="h6">
                Контакты
              </Typography>
              <Typography
                component="div"
                variant="p"
                sx={{
                  position: "absolute",
                  top: -6,
                  right: 0,
                }}
              >
                02
              </Typography>
            </Box>

            <Box sx={{ position: "relative" }}>
              <Typography sx={{ mx: 2 }} component="div" variant="h6">
                FAQ
              </Typography>

              <Typography
                component="div"
                variant="p"
                sx={{
                  position: "absolute",
                  top: -6,
                  right: 0,
                }}
              >
                03
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={9}
            md={2}
            sx={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex",
            border: "1px solid #fff",
            borderRadius: "20px",
            alignItems: "center"
            }}>
                <Typography
                component="div"
                variant="p"
                onClick={(e) => setCheck(true)}
                sx={{
                  padding: "5px 7px",
                  background: check ? "#fff" : "rgba(0, 0, 0, 0.07",
                  color: check ? "black" : "#fff",
                    borderRadius: '20px 0 0 20px',
                    cursor: "pointer",
                    ":hover" :{
                      background: '#fff'
                    }
                  }}
                  >
                  RU
                </Typography>
                <Typography
                component="div"
                variant="p"
                  onClick={(e) => setCheck(false)}
                  sx={{
                    padding: "5px 7px",
                    background: check === false ? "#fff" : "rgba(0, 0, 0, 0.07",
                    color: check === false ? "black" : "#fff",
                    borderRadius: '0 20px 20px 0',
                    cursor: "pointer",
                    ":hover" :{
                      background: '#fff'
                    }
                  }}
                >
                  UZ
                </Typography>
              </Box>
              <Typography
                component="button"
                variant="h6"
                sx={{
                  ml: 1,
                  background: "green",
                  color: "#fff",
                  padding: "5px 30px",
                  borderRadius: "100px",
                  cursor: "pointer",
                  display: {xs: "none", md: "block"}
                }}
              >
                Записаться
              </Typography>
              {Category.map((item, i) => {
                    return (
                      <>
                        <SidebarAppPhone 
                        data={item} i={i} />
                        
                      </>
                    );
                  })}
            </Box>
          </Grid>
        </Grid>
      </AppBar>
    </Box>
  );
}
const Category = [
  {
    categoryName: "Курсы",
    catalog: [
      {
        catalogName: "Онлайн",
        catalogLink: [
          { name: `Frontend Development`, link: "#" },
          { name: `Android App Development`, link: "#" },
          { name: `Java Development`, link: "#" },
          { name: `Python Development`, link: "#" },
          { name: `Foundation`, link: "/foundation" },
        ],
      },
      {
        catalogName: `Онлайн`,
        catalogLink: [
          { name: `Frontend Development`, link: "#" },
          { name: `Android App Development`, link: "#" },
          { name: `Java Development`, link: "#" },
          { name: `Python Development`, link: "#" },
          { name: `Foundation`, link: "/foundation" },
        ],
      },
    ],
  },
];

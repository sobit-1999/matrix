import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import imgHome from "../../images/Group.png";
import imgHome2 from "../../images/Rectangle.png";
import homeCard from "../../images/icons.png";

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
    // backgroundColor: 'rgba(48, 84, 48, 0.9)'
  },
};
export default function Card1() {
  return (
    <Box  style={styles.paperContainer}>
      <Box  style={styles2.paperContainer}>
        <Grid container spacing={2} sx={{ pt: 17, 
            
            color: "#fff",
            paddingX: {xs:"5%", md: "0"}
            }}>
          <Grid
            item
            xs={12}
            md={6}
            //   zIndex={1}
            sx={{
                alignItems: "center",
                display: 'flex',
                justifyContent: 'center',
            }}
          ><Box sx={{
          maxWidth: 450,
          textAlign: "left"
          }}>

            <Typography component="div" 
            variant="h3"
            sx={{fontSize:{xs: 25, sm: 44}, 
        mb: 4
        }}
            >
              Лучший способ внедрения в сферу программирования
            </Typography>
            <Typography component="div" variant="p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the
            </Typography>
          </Box>
          </Grid>
          <Grid item
            xs={12}
            md={6}
          sx={{padding: "50px 10%",
        }}
          >
          <img alt="img" width="80%" src={homeCard} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

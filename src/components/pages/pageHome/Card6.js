import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import iconImg from "../../images/icon-img.png";

export default function Card6() {
  return (
    <Box
      sx={{
        mx: { xs: "5%",  md: "15%" },
        my: 5,
        background: "green",
        color: "#fff",
        borderRadius: "20px",
      }}
    >
      <Grid container spacing={0}>
        <Grid
          item
          xs={12}
          md={3}
          >
            <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "rgb(10, 50, 10 )",
              borderRadius: {xs: "20px 20px 0 0", md: "20px 0 0 20px"},
              height: "100%",
              width: "100%",
            }}
            >
          <img alt="img" width="60%" maxWidth="50px" src={iconImg} />
            </Box>
        </Grid>
        <Grid item xs={12} md={4}
        >
          <Typography component="div" variant="h6"
          sx={{mt:3, mb:2, mx: 2}}
          >
            Поможем в выборе!
          </Typography>

          <Typography component="div" variant="p"
          sx={{mx:2}}
          >
            Если у вас есть вопросы о формате или вы не знаете, что выбрать,
            оставьте свой номер — мы позвоним, чтобы ответить на все ваши
            вопросы.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box sx={{ background: "#fff", borderRadius: 5, height: 55, mx:"5%", mt:3 }}>
            <TextField
              id="outlined-dense"
              label="Имя"
              //   className={classNames(classes.textField, classes.dense)}
              sx={{
                "& fieldset": { border: "none", height: 40 },
              }}
              margin="dense"
              variant="outlined"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              mt: 2,
              mx: "5%"
            }}
          >
            <Box sx={{ background: "#fff", borderRadius: 5, height: 55 }}>
              <TextField
                id="outlined-dense"
                label="Телефон"
                //   className={classNames(classes.textField, classes.dense)}
                sx={{
                  "& fieldset": { border: "none", height: 40 },
                }}
                margin="dense"
                variant="outlined"
              />
            </Box>
            <Box
              sx={{ background: "#fff", borderRadius: 5, height: 55, ml: 2 }}
            >
              <TextField
                id="outlined-dense"
                label="Электронная почта"
                //   className={classNames(classes.textField, classes.dense)}
                sx={{
                  "& fieldset": { border: "none", height: 40 },
                }}
                margin="dense"
                variant="outlined"
              />
            </Box>
          </Box>
          <Box align="right" sx={{ my: 3, mr:"5%" }}>
            <Button
              sx={{
                borderRadius: 10,
                background: "rgb(0,10,10)",
                color: "#fff",
                padding: "10px 20px",
                ":hover": {
                  background: "rgb(0,10,10)",
                },
              }}
            >
              Отправить
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

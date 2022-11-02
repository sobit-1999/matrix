import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
// import imgHome from "../../images/Group.png";
import imgHome2 from "../../images/Rectangle.png";
import Numbar1 from "../../images/01.png";
import Numbar2 from "../../images/02.png";
import Numbar3 from "../../images/03.png";
import Numbar4 from "../../images/04.png";
import Numbar5 from "../../images/05.png";
import Numbar6 from "../../images/06.png";

const styles2 = {
  paperContainer: {
    backgroundImage: `url(${imgHome2})`,
    width: "100%",
    backgroundColor: "rgba(0, 20, 0, 0.99)",
    paddingY: "50x"
  },
};
export default function Card3() {
  return (
    <Box
      style={styles2.paperContainer}
      sx={{
        px: { xs: "5%", md: "10%" },
        py:5
      }}
    >
      <ul>
        <Typography component="li" variant="h5" 
        sx={{ color: "#fff",
        pb:5,
        ml:2
        }}>
          Как проходит обучение
        </Typography>
      </ul>
      <Grid
        container
        spacing={12}
        sx={{
          color: "#fff",
          paddingX: { xs: "5%", md: "0" },
        }}
      >
        {category.map((itemCard, i) => {
          return (
            <Grid item xs={12} sm={6} md={4}  key={i}>
              <img alt="img" src={itemCard.img} width="100px" />

              <Typography component="div" 
              variant="h6"
              sx={{my:1}}
              >
                {itemCard.name}
              </Typography>
              <Typography component="div" variant="p">
                {itemCard.text}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

const category = [
  {
    img: Numbar1,
    name: "Онлайн или оффлайн метода обучения",
    text: "В зависимости от вашего выбора онлайн или оффлайн метода обучения, уроки начнется для вас.",
  },
  {
    img: Numbar2,
    name: "Просмотр уроков",
    text: "Уроки и домашние задания будут доступны на обучающей платформе Planner.",
  },
  {
    img: Numbar3,
    text: "Практически после каждого видеоурока идёт домашнее задание для закрепления всей пройденной информации.",
    name: "Домашние задания",
  },
  {
    img: Numbar4,
    name: "Самостоятельные работы",
    text: "В конце каждого модуля вы будите выполнять самостоятельную работу, которая покажите, насколько хорошо удалось закрепить пройденный этап.",
  },
  {
    img: Numbar5,
    name: "Разбор работ",
    text: "Куратори разбирают каждого, тем самым объясняя проблемные зоны ученика и на что стоит сделать упор. Таким образом, вы учитесь на своих ошибках.",
  },
  {
    img: Numbar6,
    name: "Экзамены",
    text: "Все участники получают разные темы проекта. В экзамене нужно будет сделать все этапы разработки сайта, презентацию проекта. ",
  },
];

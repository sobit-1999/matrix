import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import imgHome from "../../images/Background.png";
import imgHome2 from "../../images/Rectangle.png";
import ListApp from "./ListApp";

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
export default function Card5() {
  return (
    <Box style={styles.paperContainer}
    >
      <Box
        style={styles2.paperContainer}
        sx={{ paddingX: { xs: "5%", md: "10%" }, pb: 5 }}
      >
        <ul>
          <Typography
            component="li"
            variant="h5"
            sx={{ py: 5, textAlign: "left", ml: 2, color: "#fff" }}
          >
            Частые вопросы
          </Typography>
        </ul>
        <Box align="center">
          {category.map((item, i) => {
            return <ListApp key={i} data={item} />;
          })}
        </Box>
      </Box>
    </Box>
  );
}

const category = [
  {
    question: "Какие навыки нужны для начала курса?",
    answer:
      "Никакие, мы обучаем полностью с 0 и доводим до высокого уровня в программировании.",
  },
  {
    question: "Буду ли я успевать всё делать?",
    answer:
      "Никакие, мы обучаем полностью с 0 и доводим до высокого уровня в программировании.",
  },
  {
    question: "Начну ли я зарабатывать после курса?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
  },
  {
    question: "Получу ли я сертификат?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
  },
  {
    question: "Сколько работ будет в портфолио?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
  },
  {
    question: "Буду ли я знать, где искать клиентов?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
  },
  {
    question: "Успеют ли проверить каждого ученика?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
  },
  {
    question: "Вы помогаете ученикам с трудоустройством?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when",
  },
];

import { useState } from "react";
import {
  ListSubheader,
  List,
  ListItemButton,
  ListItemIcon,
  Collapse,
  Button,
  Box,
  Typography,
} from "@material-ui/core";
import { ListTitleStyle } from "./list-questions.styles";
import { OptionQuestions } from "../option-questions/option-questions.component";
export const ListQuestions = ({ data }) => {
  const [sumQuestions, setSumQuestions] = useState([]);
  const [sumCorrectValues, setSumCorrectValues] = useState({
    status: false,
    quantity: 0,
  });
  const verifyQuestion = (event, correct) => {
    setSumQuestions([
      ...sumQuestions,
      { optionChecked: event.target.value, correctValue: correct },
    ]);
  };

  const defineQuestions = () => {
    let sumCorrectValues = sumQuestions.filter(
      (value) => value.optionChecked === value.correctValue
    );
    setSumCorrectValues({ status: true, quantity: sumCorrectValues.length });
    localStorage.setItem("lastQuestions", sumQuestions);
  };

  return (
    <List
      sx={{ maxWidth: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Questions
        </ListSubheader>
      }
    >
      <form onSubmit={verifyQuestion}>
        {data.results.map((value, key) => (
          <Box mt={4} key={key}>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListTitleStyle
                sx={{ fontSize: "90px !important" }}
                primary={value.question}
              />
            </ListItemButton>
            <Collapse in={true} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 14 }}>
                  <OptionQuestions
                    data={{
                      correct: value.correct_answer,
                      values: [
                        value.correct_answer,
                        ...value.incorrect_answers,
                      ],
                    }}
                    event={(e) => verifyQuestion(e, value.correct_answer)}
                  ></OptionQuestions>
                </ListItemButton>
              </List>
            </Collapse>
          </Box>
        ))}
        <Box mt={5} mb={5}>
          {sumCorrectValues.status && (
            <Typography
              variant="h2"
              component="h2"
              sx={{ textAlign: "center", fontWeight: "100" }}
            >
              Você acertou {sumCorrectValues.quantity} questões
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="contained" color="primary" onClick={defineQuestions}>
            Verificar quantidade
          </Button>
        </Box>
      </form>
    </List>
  );
};

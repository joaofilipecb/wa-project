import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Grid } from "@material-ui/core";
import { QuestionQuantityText } from "./question-quantity.text";
import { InitialQuantity } from "../initial-quantity";
export const QuestionQuantity = () => {
  const [changeQuantityData, setChangeQuantityData] = useState();
  return (
    <InitialQuantity title={QuestionQuantityText.title}>
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        container
        mt={2}
      >
        <Grid item sm={3}>
          <TextField
            sx={{ width: "100%" }}
            onChange={(e) => setChangeQuantityData(e.target.value)}
            id="outlined-number"
            label="Quantidade"
            type="number"
          />
        </Grid>
        <Grid item sm={3}>
          <Link to={`/quantity/${changeQuantityData}`}>
            <Button sx={{ width: "100%", height: "55px" }} variant="contained">
              {QuestionQuantityText.button}
            </Button>
          </Link>
        </Grid>
      </Grid>
    </InitialQuantity>
  );
};

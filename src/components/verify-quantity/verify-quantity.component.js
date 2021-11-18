import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import { InitialQuantity } from "../initial-quantity";

export const VerifyQuantity = ({ quantity, event }) => {
  return (
    <InitialQuantity
      title={`Você selecionou ${quantity} perguntas! Deseja prosseguir?`}
    >
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={2}
      >
        <Grid item sm={4}>
          <Link to="/">
            <Button color="error" sx={{ width: "100%" }} variant="contained">
              Cancelar
            </Button>
          </Link>
        </Grid>
        <Grid item sm={4}>
          <Button
            onClick={(e) => event(e)}
            color="success"
            sx={{ width: "100%" }}
            variant="contained"
          >
            Iniciar
          </Button>
        </Grid>
      </Grid>
    </InitialQuantity>
  );
};

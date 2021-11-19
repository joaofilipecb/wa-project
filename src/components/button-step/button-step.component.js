import { Button, Box } from "@material-ui/core";
export const ButtonStep = ({ event }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Button variant="contained" color="primary" onClick={(e) => event(e)}>
      Verificar quantidade
    </Button>
  </Box>
);

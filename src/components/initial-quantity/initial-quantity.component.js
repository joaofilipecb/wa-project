import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

export const InitialQuantity = ({ title, children }) => (
  <Box mt={8}>
    <Typography fontWeight={200} textAlign="center" variant="h4">
      {title}
    </Typography>
    {children}
  </Box>
);

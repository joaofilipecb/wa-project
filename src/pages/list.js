import { useState } from "react";
import { Container, CircularProgress, Box } from "@material-ui/core";
import { useParams } from "react-router-dom";
import { VerifyQuantity } from "../components/verify-quantity";
import { ListQuestions } from "../components/list-questions";
import fetchQuestions from "../services";
const List = () => {
  const { id } = useParams();
  const [listData, setListData] = useState();
  const [loading, setLoading] = useState(false);
  const getQuestions = (e) => {
    fetchQuestions().then((response) => setListData(response));
    setLoading(true);
  };
  return (
    <Container>
      <VerifyQuantity event={(e) => getQuestions(e)} quantity={id} />
      {loading && !listData && (
        <Box mt={20} sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress size={90} />
        </Box>
      )}
      {listData && <ListQuestions data={listData} />}
    </Container>
  );
};

export default List;

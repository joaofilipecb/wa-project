import axios from "axios";

const fetchQuestions = async (id) => {
  try {
    let res = await axios({
      url: `https://opentdb.com/api.php?amount=${id}`,
      method: "get",
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default fetchQuestions;

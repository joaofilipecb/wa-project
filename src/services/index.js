import axios from "axios";

const fetchQuestions = async (e) => {
  try {
    let res = await axios({
      url: "https://opentdb.com/api.php?amount=10",
      method: "get",
    });
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default fetchQuestions;

import Questionary from "./Questionary";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const QuestionaryDetails = () => {
  return (
    <Box>
      <Link to="/">Volver</Link>
      <Questionary />
    </Box>
  );
};

export default QuestionaryDetails;

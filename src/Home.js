import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import Questionary from "./Questionary";

const Home = () => {
  return (
    <Box>
      <Link to="/">
        <h1>Video Questionario</h1>
      </Link>
      <Box
        sx={{
          display: "flex",
          gap: 3,
        }}
      >
        <Questionary question={"What is your favorite video game?"} />

        <Questionary question={"What is your favorite sport?"} />

        <Questionary question={"What is your favorite color?"} />

        <Questionary question={"What is your favorite soccer player?"} />
      </Box>
    </Box>
  );
};

export default Home;

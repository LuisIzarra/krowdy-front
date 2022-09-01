import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Questionary from "./Questionary";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
      }}
    >
      <Link to="/">
        <h1>Video Questionario</h1>
      </Link>
      <Link to="/questionary">
        <Questionary question={"What is your favorite video game?"} />
      </Link>
      <Link to="/questionary">
        <Questionary question={"What is your favorite sport?"} />
      </Link>
      <Link to="/questionary">
        <Questionary question={"What is your favorite color?"} />
      </Link>
      <Link to="/questionary">
        <Questionary question={"What is your favorite soccer player?"} />
      </Link>
    </Box>
  );
};

export default Home;

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
        <Questionary question={"Cual es tu video juego favorito?"} />

        <Questionary question={"Cual es tu deporte favorito?"} />

        <Questionary question={"Cual es tu color favorito?"} />

        <Questionary question={"Quién es tu jugador de fútbol favorito?"} />
      </Box>
    </Box>
  );
};

export default Home;

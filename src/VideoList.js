import Questionary from "./Questionary";
import { Box } from "@mui/material";

const VideoList = () => {
  return (
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
  );
};

export default VideoList;

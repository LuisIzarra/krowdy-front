import Questionary from "./Questionary";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const QuestionaryDetails = () => {
  const _handleOnClickPlay = () => {
    if (navigator.mediaDevices) {
      console.log("getUserMedia supported.");
      const constraints = { audio: true };
      let chunks = [];

      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
      });
    }
  };

  return (
    <Box>
      <Link to="/">Volver</Link>
      <Questionary onClickPlay={_handleOnClickPlay} />
    </Box>
  );
};

export default QuestionaryDetails;

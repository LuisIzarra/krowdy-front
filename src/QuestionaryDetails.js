import Questionary from "./Questionary";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { useRef } from "react";

const QuestionaryDetails = () => {
  const videoRef = useRef();

  const _handleOnClickPlay = () => {
    if (navigator.mediaDevices) {
      console.log("getUserMedia supported.");
      const constraints = { video: true, audio: true };

      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        videoRef.current.srcObject = stream;
      });
    }
  };

  const _handleCanPlay = () => {
    videoRef.current.play();
    console.log("_handleCanPlay");
  };

  return (
    <Box>
      <Link to="/">Volver</Link>
      <Questionary onClickPlay={_handleOnClickPlay} />
      <video
        ref={videoRef}
        onCanPlay={_handleCanPlay}
        width="200px"
        height="200px"
        autoPlay
        playsInline
        muted
      ></video>
    </Box>
  );
};

export default QuestionaryDetails;

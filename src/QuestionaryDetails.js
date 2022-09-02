import Questionary from "./Questionary";
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useRef } from "react";

const QuestionaryDetails = () => {
  const searchParams = useParams();

  const question = searchParams["q"];

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
      <Questionary
        width="864px"
        height="612px"
        onClickPlay={_handleOnClickPlay}
        sxProps={{ marginTop: "-34px", width: "864px", height: "96px" }}
        paddingTop="0px"
        marginTop="-89px"
        videoButtonsPosition="absolute"
        question={question}
        videoComponent={
          <video
            ref={videoRef}
            onCanPlay={_handleCanPlay}
            width="862px"
            height="612px"
            autoPlay
            playsInline
            muted
          ></video>
        }
      />
    </Box>
  );
};

export default QuestionaryDetails;

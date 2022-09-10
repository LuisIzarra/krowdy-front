import Questionary from "./Questionary";
import { Link, useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const QuestionaryDetails = () => {
  const [mediaRecorder, setMediaRecorder] = useState();

  const searchParams = useParams();

  const question = searchParams["q"];

  const videoRef = useRef();

  const _handleOnClickPlay = () => {
    if (navigator.mediaDevices) {
      console.log("getUserMedia supported.");
      const constraints = { video: true, audio: true };

      navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        videoRef.current.srcObject = stream;
        const _mediaRecorder = new MediaRecorder(stream);
        setMediaRecorder(_mediaRecorder);
      });
    }
  };

  const _handleOnClickStop = () => {
    mediaRecorder.stop();
    console.log(mediaRecorder.state);
    console.log("recorder stopped");
  };

  const _handleCanPlay = () => {
    videoRef.current.play();
    console.log("_handleCanPlay");
    mediaRecorder.start();
    console.log(mediaRecorder.state);
    console.log("recorder started");
  };

  return (
    <Box>
      <Link to="/">
        <ArrowBackIcon />
        Volver
      </Link>
      <Questionary
        width="864px"
        height="612px"
        onClickPlay={_handleOnClickPlay}
        onClickStop={_handleOnClickStop}
        sxProps={{ marginTop: "-34px", width: "864px", height: "96px" }}
        paddingTop="0px"
        marginTop="-89px"
        videoButtonsPosition="absolute"
        question={question}
        typoProps={{ fontSize: "2rem", paddingTop: "25px" }}
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

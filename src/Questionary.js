import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const VIDEO_RECORDER_STATUS_PLAY = "video_recorder_status_play";

const VIDEO_RECORDER_STATUS_STOP = "video_recorder_status_stop";

const Questionary = ({
  question,
  onClickPlay,
  width = 245,
  height = 393,
  sxProps = {},
  paddingTop = "290px",
  marginTop = 0,
  videoButtonsPosition = "initial",
  videoComponent = null,
}) => {
  const [videoRecoderStatus, setVideoRecoderStatus] = useState(
    VIDEO_RECORDER_STATUS_PLAY
  );

  const _handleOnClick = (status) => {
    setVideoRecoderStatus(status);
    console.log("aqui");
  };

  const _handleOnClickStop = () => {
    _handleOnClick(VIDEO_RECORDER_STATUS_PLAY);
    console.log("stop");
  };

  const _handleOnClickPlay = () => {
    _handleOnClick(VIDEO_RECORDER_STATUS_STOP);
    onClickPlay();
    console.log("play");
  };

  return (
    <Box>
      <Box
        sx={{
          width: { width },
          height: { height },
          backgroundColor: "black",
        }}
      >
        {videoComponent}
        <Box
          sx={{
            paddingTop: { paddingTop },
            marginTop: { marginTop },
            position: videoButtonsPosition,
          }}
        >
          <Box
            sx={{
              marginTop: "10px",
              marginLeft: "12px",
            }}
          >
            <img src="/CircleVideoPlay.png" alt="circle"></img>
          </Box>

          {videoRecoderStatus === VIDEO_RECORDER_STATUS_PLAY && (
            <Box
              onClick={_handleOnClickPlay}
              sx={{
                marginTop: "-43px",
                marginLeft: "36px",
              }}
            >
              <img src="/TriangleVideoPlay.png" alt="triangle"></img>
            </Box>
          )}

          {videoRecoderStatus === VIDEO_RECORDER_STATUS_STOP && (
            <Box
              onClick={_handleOnClickStop}
              sx={{
                marginTop: "-45px",
                marginLeft: "35px",
              }}
            >
              <img src="/SquareVideoPlay.png" alt="square"></img>
            </Box>
          )}
        </Box>
        <Box
          sx={{
            marginTop: "0",
            width: "245px",
            height: "65px",
            backgroundColor: "gray",
            ...sxProps,
          }}
        >
          <Link to="/questionary">
            <Typography
              px={0.5}
              py={1}
              sx={{
                marginTop: "30px",
                textAlign: "center",
              }}
            >
              {question}
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Questionary;

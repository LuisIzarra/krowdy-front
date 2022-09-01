import { Box, Typography } from "@mui/material";
import { useState } from "react";

const VIDEO_RECORDER_STATUS_PLAY = "video_recorder_status_play";

const VIDEO_RECORDER_STATUS_STOP = "video_recorder_status_stop";

const Questionary = ({ question }) => {
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
    console.log("play");
  };

  return (
    <Box>
      <Box
        sx={{
          width: 245,
          height: 393,
          backgroundColor: "black",
        }}
      >
        <Box
          sx={{
            paddingTop: "290px",
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
            width: "245px",
            height: "65px",
            backgroundColor: "gray",
          }}
        >
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
        </Box>
      </Box>
    </Box>
  );
};

export default Questionary;

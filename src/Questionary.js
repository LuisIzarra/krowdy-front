import { Box, Typography } from "@mui/material";

const Questionary = ({ question }) => {
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
          <Box
            sx={{
              marginTop: "-43px",
              marginLeft: "36px",
            }}
          >
            <img src="/TriangleVideoPlay.png" alt="triangle"></img>
          </Box>
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

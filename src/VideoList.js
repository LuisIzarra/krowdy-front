import Questionary from "./Questionary";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
const VideoList = () => {
  return (
    <Router>
      <Routes>
        <Route path="/questionary" element={<Questionary />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default VideoList;

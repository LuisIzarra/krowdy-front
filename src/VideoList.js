import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import QuestionaryDetails from "./QuestionaryDetails";

const VideoList = () => {
  return (
    <Router>
      <Routes>
        <Route path="/questionary" element={<QuestionaryDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default VideoList;

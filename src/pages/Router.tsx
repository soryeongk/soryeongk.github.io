import { Project, Resume } from "pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/project/*" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

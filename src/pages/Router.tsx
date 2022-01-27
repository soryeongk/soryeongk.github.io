import { Project, Resume, Error } from "pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/error" element={<Error />} />
        <Route path="/project/*" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

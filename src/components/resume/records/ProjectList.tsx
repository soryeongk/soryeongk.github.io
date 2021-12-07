import { useNavigate } from "react-router";

function ProjectList() {
  const navigate = useNavigate();

  return (
    <ul>
      <li onClick={() => navigate("/project/cherish")}>Cherish</li>
      <li onClick={() => navigate("/project/dibker")}>dibker</li>
      <li onClick={() => navigate("/project/colfume")}>colfume</li>
      <li onClick={() => navigate("/project/ddowaddo")}>또와또</li>
    </ul>
  );
}

export default ProjectList;

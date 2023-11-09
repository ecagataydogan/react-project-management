import { useState } from "react";
import NewProject from "./components/NewProject";
import Projects from "./components/Projects";
import ProjectWindow from "./components/ProjectWindow";

function App() {
  const [newProjectWindow, setNewProjectWindow] = useState(false);
  const [projects, setProjects] = useState([]);
  const [projectWindow, setProjectWindow] = useState(false);
  console.log(projectWindow);

  function handleAddProject() {
    setNewProjectWindow(true);
  }

  return (
    <>
      <button onClick={handleAddProject}>Add Project</button>
      {newProjectWindow && <NewProject setProjects={setProjects} />}
      {projects.length !== 0 && (
        <Projects projects={projects} setProjectWindow={setProjectWindow} />
      )}
      {projectWindow !== false && (
        <ProjectWindow
          project={projects[projectWindow]}
          index={projectWindow}
          setProjects={setProjects}
          setProjectWindow={setProjectWindow}
          projects={projects}
        />
      )}
    </>
  );
}

export default App;

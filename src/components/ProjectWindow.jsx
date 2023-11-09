import { useEffect, useRef } from "react";

export default function ProjectWindow({
  projects,
  project,
  index,
  setProjects,
  setProjectWindow,
}) {
  function addTask(index) {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects[index].tasks.push(task);
      return updatedProjects;
    });
    taskRef.current.value = "";
  }

  function handleDeleteTask(i) {
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects[index].tasks.splice(i, 1);
      return updatedProjects;
    });
  }

  function handleDeleteProject() {
    setProjectWindow(false);
    setProjects((prevProjects) => {
      const updatedProjects = [...prevProjects];
      updatedProjects.splice(index, 1);
      return updatedProjects;
    });
  }

  const taskRef = useRef();
  let task;
  function handleTask(event) {
    task = event.target.value;
  }

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <h2>Tasks</h2>
      <input
        ref={taskRef}
        type="text"
        onChange={(event) => handleTask(event)}
      />
      <button onClick={() => addTask(index)}></button>
      {project.tasks.length !== 0 && (
        <ol>
          {project.tasks.map((task, i) => (
            <div key={i}>
              <li>{task}</li>
              <button onClick={() => handleDeleteTask(i)}>Delete</button>
            </div>
          ))}
        </ol>
      )}
      <button onClick={handleDeleteProject}>Delete Project</button>
    </>
  );
}

export default function Projects({ projects, setProjectWindow }) {
  function handleProject(index) {
    setProjectWindow(index);
  }
  return (
    <ol>
      {projects.map((project, i) => (
        <button onClick={() => handleProject(i)} key={i}>
          {project.title}
        </button>
      ))}
    </ol>
  );
}

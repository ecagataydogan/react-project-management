import { useState, useRef } from "react";

//Projects arrayi iki kere ekleme yapınca aynısını ekliyo

export default function NewProject({ setProjects }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const newProjectDescription = {
    title: "",
    description: "",
    date: "",
    tasks: [],
  };

  function handleChange(event, key) {
    event.preventDefault();
    newProjectDescription[key] = event.target.value;
  }
  function handleSaveClick() {
    setProjects((prevProjects) => {
      const updatedProjects = [
        ...prevProjects.map((project) => {
          {
            const { title, description, date, tasks } = project;
            return { title, description, date, tasks };
          }
        }),
      ];
      updatedProjects.push(newProjectDescription);
      return updatedProjects;
    });
    titleRef.current.value = "";
    descriptionRef.current.value = "";
    dateRef.current.value = "";
  }

  return (
    <>
      <button onClick={handleSaveClick}>Save</button>
      <h1>title</h1>
      <input
        ref={titleRef}
        type="text"
        onChange={(event) => handleChange(event, "title")}
      />
      <h1>description</h1>
      <input
        ref={descriptionRef}
        type="text"
        onChange={(event) => handleChange(event, "description")}
      />
      <h1>due date</h1>
      <input
        ref={dateRef}
        type="text"
        onChange={(event) => handleChange(event, "date")}
      />
    </>
  );
}

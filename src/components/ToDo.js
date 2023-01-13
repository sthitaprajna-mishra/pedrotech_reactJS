import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./ToDo.module.css";

const ToDo = () => {
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const submitToDo = (e) => {
    e.preventDefault();
    // setToDoList(
    //   toDoList.concat({ id: uuidv4(), title: toDoTitle, isCompleted: false })
    // );
    const toDo = {
      id: uuidv4(),
      title: toDoTitle,
      isCompleted: false,
    };
    setToDoList([...toDoList, toDo]);
    setToDoTitle("");
  };

  const editToDo = (toDoId) => {
    let toDoItem = toDoList.find((el) => el.id === toDoId);
    toDoItem.isCompleted = !toDoItem.isCompleted;
    setToDoList(toDoList.filter((el) => el.id !== toDoId).concat(toDoItem));
  };

  const deleteToDo = (toDoId) => {
    setToDoList(toDoList.filter((el) => el.id !== toDoId));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <form onSubmit={submitToDo}>
          <input
            type="text"
            name="title"
            value={toDoTitle}
            onChange={(e) => setToDoTitle(e.target.value)}
          />
          <button type="submit">Add To Do</button>
        </form>
      </div>
      <div className={styles.body}>
        <ul>
          {toDoList.map((el) => (
            <li
              key={el.id}
              style={{
                backgroundColor: el.isCompleted ? "green" : "orange",
              }}
            >
              <h4>{el.title}</h4>
              <button onClick={() => editToDo(el.id)}>Complete</button>
              <button onClick={() => deleteToDo(el.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;

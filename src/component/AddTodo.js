
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    console.log("pass the return");
    addTodo({ task });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Add a new todo"
      />
      <button 
      className="addButton"
      type="submit">Add Todo</button>
    </form>
  );
};

export default connect(null, { addTodo })(AddTodo);
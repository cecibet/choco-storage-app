import React from "react";
import "./TaskButton.css";

const TaskButton = ({ task }) => {
  return (
    <div className="TaskButtons">
      <button>{task}</button>
    </div>
  );
};

export default TaskButton;

import React from "react";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <task 
          text={task.text}
          category={task.category}
          />
        )
      })}
    </div>
  );
}

export default TaskList;

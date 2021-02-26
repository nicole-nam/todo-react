import React from "react";

function TodoItem(props) {
  return (
    <div className="list-container" onClick={() => props.remove(props.id)}>
      <li>{props.text}</li>
      <i class="far fa-trash-alt"></i>
    </div>
  );
}

export default TodoItem;

import React from "react";

function TodoItem(props) {
  return (
    <div className="list-container">
      <li>{props.text}</li>
      <i class="far fa-trash-alt" onClick={() => props.remove(props.id)}></i>
    </div>
  );
}

export default TodoItem;

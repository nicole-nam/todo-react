import React, { useState } from "react";

function TodoItem(props) {
  const [click, setClick] = useState(false);

  function handleClick() {
    console.log(click);
    setClick(true);
  }

  return (
    <div onClick={handleClick}>
      <li
        style={
          click
            ? { textDecoration: "line-through" }
            : { textDecoration: "none" }
        }
      >
        {props.text}
      </li>
    </div>
  );
}

export default TodoItem;

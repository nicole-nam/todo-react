import React, { useState } from "react";

function InputArea(props) {
  const [newInput, setNewInput] = useState("");

  function handleChange(e) {
    const input = e.target.value;
    setNewInput(input);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={newInput} />
      <button
        onClick={() => {
          props.onAdd(newInput);
          setNewInput("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;

import React, { memo, useRef } from "react";

function Input({ addTodo }) {
  const inputRef = useRef();
  const onAddTodo = (event) => {
    const ENTER = 13;
    if (event.keyCode !== ENTER) return;
    addTodo(inputRef.current?.value.trim());
    inputRef.current.value = "";
  };

  return (
    <input
      type="text"
      placeholder="Buy milk..."
      className="border-2 rounded-lg mb-4 border-gray-700 outline-none py-3 px-4 w-full"
      ref={inputRef}
      onKeyDown={onAddTodo}
    ></input>
  );
}

export default memo(Input);

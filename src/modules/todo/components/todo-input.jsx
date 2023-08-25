import { forwardRef, memo, useImperativeHandle, useRef } from "react";

function TodoInput({ addTodo }, ref) {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    value: () => {
      return inputRef.current.value;
    },
    focus: () => {
      inputRef.current.focus();
    },
    setValue: (value) => {
      inputRef.current.value = value;
    },
  }));

  const onAddTodo = (e) => {
    const ENTER = 13;
    if (e.keyCode === ENTER) {
      addTodo();
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        className="w-full outline-none rounded-md mb-4 mt-2 text-lg px-2 py-2 border-gray-300 border-2 bg-slate-100"
        placeholder="Enter todo"
        onKeyUp={onAddTodo}
      />
    </>
  );
}

export default memo(forwardRef(TodoInput));

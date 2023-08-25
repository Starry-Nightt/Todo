import React from "react";
import todoService from "../../../services/todo-service";
export function TodoItem({ id, todo, completed, checkTodo }) {
  const onCheck = (id) => {
    return checkTodo(id);
  };

  return (
    <>
      {completed ? (
        <li className="bg-green-300 py-2 px-4 border-2 border-slate-200 rounded-md w-3/4 mx-auto my-3 flex justify-between">
          <span>{todo}</span>
          <div className="flex">
            <button
              className="px-4 py-1 text-sm mx-1 bg-amber-200 border-none outline-none rounded-lg"
              onClick={onCheck(id)}
            >
              Check
            </button>
            <button className="px-4 py-1 text-sm mx-1 bg-rose-700 text-white border-none outline-none rounded-lg">
              Remove
            </button>
          </div>
        </li>
      ) : (
        <li
          className="bg-rose-400 py-2 px-4 border-2 border-slate-200 rounded-md w-3/4 mx-auto my-3 flex justify-between"
          onClick={onCheck(id)}
        >
          <span>{todo}</span>

          <div>
            <button className="px-4 py-1 text-sm mx-1 bg-amber-200 border-none outline-none rounded-lg">
              Check
            </button>
            <button className="px-4 py-1 text-sm mx-1 bg-rose-700 text-white border-none outline-none rounded-lg">
              Remove
            </button>
          </div>
        </li>
      )}
    </>
  );
}

import { useCallback, useEffect, useId, useRef, useState } from "react";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";
import useTodo from "./useTodo";
import todoService from "../../services/todo-service";

function Todo() {
  const { todoList, setTodoList, inputRef } = useTodo();

  const addTodo = useCallback(() => {
    const data = inputRef.current.value();
    const newTodo = {
      todo: data,
      userId: 1,
      completed: false,
    };
    todoService.addNewTodo(newTodo).then((res) => {
      setTodoList((prev) => [res.data, ...prev]);
    });
    inputRef.current.setValue("");
  }, []);

  const checkTodo = (id) => {
    const itemTodo = todoList.find((item) => item.id === id);
    if (itemTodo) {
      const completed = !itemTodo.completed;
      todoService.updateTodo(id, { completed }).then((res) => {
        itemTodo.completed = res.data;
      });
    }
  };

  return (
    <>
      <h2 className="text-4xl text-center">Todo App</h2>
      <div className="border-indigo-500/50 border-2 w-1/2 mx-auto my-10 rounded-lg p-5">
        <TodoInput ref={inputRef} addTodo={addTodo} />
        <TodoList checkTodo={checkTodo} todoList={todoList} />
      </div>
    </>
  );
}

export default Todo;

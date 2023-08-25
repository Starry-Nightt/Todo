import { useCallback, useEffect, useState } from "react";
import todoService from "../../services/todo-service";

function useTodoApp() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    todoService.getAll({ signal: controller.signal }).then((res) => {
      setTodoList(() => res.data.todos);
    });
    return () => {
      controller.abort();
    };
  }, []);

  const addTodo = useCallback((todo) => {
    const controller = new AbortController();
    const newTodo = {
      todo,
      completed: false,
      userId: 1,
    };
    todoService
      .addNewTodo(newTodo, { signal: controller.signal })
      .then((res) => {
        setTodoList((prev) => [newTodo, ...prev]);
      });
    return () => {
      controller.abort();
    };
  }, []);

  return { todoList, setTodoList, addTodo };
}

export default useTodoApp;

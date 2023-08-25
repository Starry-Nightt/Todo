import { useEffect, useRef, useState } from "react";
import todoService from "../../services/todo-service";

export default function useTodo() {
  const [todoList, setTodoList] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const controller = new AbortController();
    todoService.getAll({ signal: controller.signal }).then((res) => {
      setTodoList((prev) => res.data.todos);
    });
    return () => {
      controller.abort();
    };
  }, []);

  return { todoList, setTodoList, inputRef };
}

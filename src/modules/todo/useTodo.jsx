import { useEffect, useState } from "react";
import todoService from "../../services/todo-service";

export default function useTodo() {
  const [todoList, setTodoList] = useState([]);

  useEffect(async () => {
    // const controller = new AbortController();

    const res = await todoService.getAll();
    // setTodoList(() => res.data);
    console.log(res);

    return () => {
      //   controller.abort();
    };
  }, []);

  return { todoList, setTodoList };
}

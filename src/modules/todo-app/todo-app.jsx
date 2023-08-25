import { useRef } from "react";
import Input from "./components/input";
import { TodoItem } from "./components/todo-item";
import useTodoApp from "./use-todo-app";

function TodoApp() {
  const { todoList, setTodoList, addTodo } = useTodoApp();

  const dragStartIndex = useRef();
  const dragOverIndex = useRef();

  const dragStart = (event, idx) => {
    dragStartIndex.current = idx;
  };

  const dragOver = (event, idx) => {
    dragOverIndex.current = idx;
  };

  const dragEnd = () => {
    const _todoList = [...todoList];
    const draggedItem = _todoList.splice(dragStartIndex.current, 1)[0];
    _todoList.splice(dragOverIndex.current, 0, draggedItem);
    dragStartIndex.current = undefined;
    dragOverIndex.current = undefined;
    setTodoList(_todoList);
  };

  return (
    <section className="flex justify-center items-center  bg-indigo-600 grayscale-50 min-h-screen">
      <div className="bg-white p-4 h-5/6 w-1/4 min-w-100 min-h-120 max-h-120 rounded-lg shadow-2xl overflow-y-auto">
        <Input addTodo={addTodo} />
        {todoList && !!todoList.length && (
          <ul>
            {todoList.map((item, idx) => (
              <TodoItem
                key={idx}
                {...item}
                dragStart={dragStart}
                dragOver={dragOver}
                dragEnd={dragEnd}
                index={idx}
              />
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

export default TodoApp;

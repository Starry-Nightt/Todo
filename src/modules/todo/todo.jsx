import useTodo from "./useTodo";

function Todo() {
  const { todoList, setTodoList } = useTodo();
  return (
    <>
      <h2 className="text-4xl text-center">Todo App</h2>
    </>
  );
}

export default Todo;

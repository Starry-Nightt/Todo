import { TodoItem } from "./todo-item";
function TodoList({ todoList, checkTodo }) {
  const checked = todoList.filter((item) => item.completed);
  const unchecked = todoList.filter((item) => !item.completed);
  return (
    <ul className="min-w-100">
      {checked &&
        !!checked.length &&
        checked.map((todo) => {
          return <TodoItem checkTodo={checkTodo} key={todo.id} {...todo} />;
        })}

      {unchecked &&
        !!unchecked.length &&
        unchecked.map((todo) => {
          return <TodoItem checkTodo={checkTodo} key={todo.id} {...todo} />;
        })}
    </ul>
  );
}

export default TodoList;

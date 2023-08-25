import appClient from "./app-client";

class TodoService {
  getAll(config = {}) {
    return appClient.get("/todos", {}, config);
  }

  getSingle(id, config = {}) {
    return appClient.get(`/todos/${id}`, {}, config);
  }

  getByUser(userId, config = {}) {
    return appClient.get(`/todos/user/${userId}`, {}, config);
  }

  addNewTodo(data, config = {}) {
    return appClient.post("todos/add", data, config);
  }

  updateTodo(id, data, config = {}) {
    return appClient.put(`todos/${id}`, data, config);
  }

  deleteTodo(id, config = {}) {
    return appClient.delete(`todos/${id}`, config);
  }
}

const todoService = new TodoService();

export default todoService;

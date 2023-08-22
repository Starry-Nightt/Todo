import appClient from "./app-client";

class TodoService {
  getAll() {
    return appClient.get("/todos");
  }

  getSingle(id) {
    return appClient.get(`/todos/${id}`);
  }

  getByUser(userId) {
    return appClient.get(`/todos/user/${userId}`);
  }
}

export default new TodoService();

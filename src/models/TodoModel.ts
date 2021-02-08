import store from "../store/index";
import { TodoItem } from "@/interface/TodoItemInterface";

export default class TodoModel {
  create() {
    const title = prompt("Task title", "");
    if (!title) {
      return alert("Title is required");
    }
    store.commit("todo/CREATE", {
      id: Date.now(),
      title,
      date: new Date(),
      completed: false
    });
  }
  delete(item: TodoItem) {
    store.commit("todo/DELETE", item);
  }
}

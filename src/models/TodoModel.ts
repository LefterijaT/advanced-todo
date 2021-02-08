import store from "../store/index";

export default class TodoModel {
  create() {
    const title = prompt("Task title", "");
    if (!title) {
      return alert("Title is required");
    }
    store.commit("todo/SET_NEW_ITEM", {
      title,
      date: new Date(),
      completed: false
    });
  }
}

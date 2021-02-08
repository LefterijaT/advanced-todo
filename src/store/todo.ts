import { Module } from "vuex";
import { RootState } from "@/store/index";
import { TodoItem } from "@/interface/TodoItemInterface";

export interface TodoState {
  list: TodoItem[];
}

const TodoStore: Module<TodoState, RootState> = {
  namespaced: true,

  state: {
    list: []
  },

  mutations: {
    SET_NEW_ITEM(state, payload: TodoItem) {
      state.list.push(payload);
    }
  }
};

export default TodoStore;

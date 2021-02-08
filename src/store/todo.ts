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
    CREATE(state, payload: TodoItem) {
      state.list.push(payload);
    },
    DELETE(state, payload: TodoItem) {
      state.list = state.list.filter(item => item.id !== payload.id);
    }
  }
};

export default TodoStore;

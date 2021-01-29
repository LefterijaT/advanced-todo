import { Module } from "vuex";
import { RootState } from "@/store/index";

interface TodoItem {
  title: string;
  date: Date;
  completed: boolean;
}

export interface TodoState {
  list: TodoItem[];
}

const TodoStore: Module<TodoState, RootState> = {
  namespaced: true,

  state: {
    list: []
  },

  mutations: {},

  actions: {}
};

export default TodoStore;

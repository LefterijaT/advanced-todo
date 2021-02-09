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
    INIT(state, payload: TodoItem[]) {
      state.list = payload;
    },
    CREATE(state, payload: TodoItem) {
      state.list.push(payload);
      localStorage.setItem('toDoList', JSON.stringify(state.list));
    },
    DELETE(state, payload: TodoItem) {
      state.list = state.list.filter(item => item.id !== payload.id);
      localStorage.setItem('toDoList', JSON.stringify(state.list));
    },
    EDIT(state, {item,title} : { item : TodoItem, title : string}) {
        item.title = title;
      localStorage.setItem('toDoList', JSON.stringify(state.list));
    }
  },

  actions:{
    init ({commit}){
      const list = localStorage.getItem("toDoList");
      if (list){
        commit ("INIT", JSON.parse(list))
      }
    }
  }
};

export default TodoStore;

import Vue from "vue";
import Vuex from "vuex";
import TodoStore, { TodoState } from "@/store/todo";

Vue.use(Vuex);

export interface RootState {
  todo: TodoState;
}

const store = new Vuex.Store<RootState>({
  modules: {
    todo: TodoStore
  }
});

export default store;

import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    posts: [{ id: "1", name: "Post 1", text: "Super text description" }],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});

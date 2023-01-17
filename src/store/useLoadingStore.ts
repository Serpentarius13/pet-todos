import { defineStore } from "pinia";

export default defineStore("loading", {
  state: () => ({
    isLoading: false,
    isError: false,
    loaded: false,
  }),
  actions: {
    load() {
      if (!this.isLoading) this.isLoading = true;
    },
    unload() {
      if (this.isLoading) {
        this.isLoading = false;
        this.loaded = true;
      }
    },
    error() {
      if (!this.isError) this.isError = true;
    },
    unError() {
      if (this.isError) this.isError = false;
    },
  },
});

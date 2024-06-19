import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blogStore', {
  state: () => ({
    blogs: [],
  }),
  actions: {
    fetchBlogs() {
      // Simulate fetching blogs from an API or other source
      this.blogs = [
        { id: 1, title: 'First Blog' },
        { id: 2, title: 'Second Blog' },
      ];
    },
    getBlogs() {
      return this.blogs;
    },
  },
});

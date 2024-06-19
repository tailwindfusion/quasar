<template>
    <div>
      <!-- <ul>
        <li v-for="blog in blogs" :key="blog.id">{{ blog.title }}</li>
      </ul> -->
      BlogList component 
    </div>
  </template>
  
  <script>
  import { computed, onMounted } from 'vue';
  import { useBlogStore } from 'src/stores/blogStore';
  
  export default {
    name: 'BlogList',
    setup() {
      const blogStore = useBlogStore();
  
      onMounted(() => {
        blogStore.fetchBlogs();
      });
  
      const blogs = computed(() => blogStore.blogs);
  
      return {
        blogs,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  
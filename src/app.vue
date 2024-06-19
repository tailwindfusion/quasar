<!-- Example usage in App.vue or IndexPage.vue -->

<template>
    <div>
      <BlogList />
    </div>
  </template>
  
  <script>
  import BlogList from './components/BlogList.vue';
  
  export default {
    name: 'App', // Or the appropriate component name
    components: {
      BlogList,
    },
  };
  </script>
  
  <style>
  /* Your component styles */
  </style>
Your  
<!-- Example usage in App.vue or IndexPage.vue -->

<template>
    <div>
      <IndexComponent />
    </div>
  </template>
  
  <script>
  import IndexComponent from '../components/IndexComponent.vue'; // Adjust the relative path as necessary
  
  export default {
    name: 'App', // Or the appropriate component name
    components: {
      IndexComponent,
    },
  };
  </script>
  
  <style>
  /* Your component styles */
  </style>
  
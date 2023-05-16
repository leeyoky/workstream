<template>
    <div class="spinner-container">
      <div class="spinner" />
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 15px solid #e0e0e0;
    border-bottom: 15px solid #2196f3;
    animation: spin 1.2s linear infinite;
    position: relative;
    background-color: rgb(255, 255, 255);
  }
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  </style>
<template>
    <div class="nav">
      <router-link to="/all">Tout</router-link>
      <router-link to="/received">Reçu</router-link>
      <router-link to="/processing">En cours de traitement</router-link>
      <router-link to="/refused">Refusé</router-link>
    </div>
  </template>
  
  <script>
  export default {
    // Le reste de votre script va ici
  }
  </script>
  
  <style scoped>
  .nav {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100vh;
    background-color: #f8f9fa;
    padding: 20px;
  }
  
  .nav a {
    text-decoration: none;
    color: black;
    margin-bottom: 15px;
  }
  </style>
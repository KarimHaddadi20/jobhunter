<!-- NavBar.vue -->

<template>
  <nav class="navbar">
    <div>
      <a href=".">
        <img src="@/assets/logo.png" alt="Logo" class="logo" />
      </a>
    </div>
    <div>
      <router-link to="/signup" class="nav-link">S'inscrire</router-link>
      <router-link to="/login" class="nav-link">Se connecter</router-link>
    </div>
  </nav>
</template>

<script setup>
//
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  margin-bottom: 80px;
}

.logo {
  height: 150px;
  margin: 0 5em;
}

.links {
  display: flex;
}

.nav-link {
  display: inline-block;
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-right: 15em;
  color: #0d74ce;

  border: 1px solid #7dcedc;
  background-color: white;
  text-decoration: none;
  padding: 8px;
  border-radius: 5px;
}

.nav-link:not(:last-of-type) {
  margin-right: 1em;
}
</style>

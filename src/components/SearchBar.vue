<!-- SearchBar.vue -->

<template>
  <div class="search-container">
    <input
      class="search-bar"
      type="text"
      placeholder="Recherche"
      v-model="search"
    />
    <img class="search-logo" src="@/assets/loupe.png" alt="Search" />
  </div>
</template>

<script setup>
//
</script>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2vw; /* Adjust this value according to your needs */
  position: relative;
}

.search-bar {
  width: 30vw; /* Adjust this value according to your needs */
  height: 35px; /* Adjust this value according to your needs */
  background-color: #e4e3e3; /* Change this to your desired color */
  border-radius: 25px;
  border: none;
  padding-left: 40px;
}

.search-logo {
  position: absolute;
  left: 550px; /* Adjust this value based on the size of your logo */
  top: 50%;
  transform: translateY(-50%);
  height: 20px; /* Adjust this value based on the size of your logo */
  width: 20px; /* Adjust this value based on the size of your logo */
}
</style>

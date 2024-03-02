<template>
  <div class="container">
    <div class="left-column">
      <h1>Préparez-vous pour votre prochain stage</h1>
    </div>
    <div class="right-column">
      <img src="@/assets/homepicture.jpg" alt="img" />
    </div>
  </div>
</template>

<script setup>
//
</script>

<style scoped>
.container {
  display: flex;
}

.left-column,
.right-column {
  flex: 1;
  margin-top: 80px;
}

.right-column img {
  width: 80%;
  height: auto;
}

.left-column h1 {
  font-size: 2em;
  font-weight: 400;
  font-family: "Roboto Slab", serif;
  margin-left: 5em;
  margin-right: 5em;
  margin-top: 5em;
  margin-bottom: 5em;
}
</style>

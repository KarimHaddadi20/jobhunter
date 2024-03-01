<!-- src/components/List.vie -->

<template>
    <div>
      <ul>
        <li v-for="item in linksite" :key="item.id">
          <img v-if="item.logo[0]" :src="item.logo[0].signedUrl" alt="Logo" />
          <h2>{{ item.title }}</h2>
          <a :href="item.url">{{ item.url }}</a>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import linksiteInstance from '@/services/linksite.js';
  
  const linksite = ref([]);
  
  onMounted(async () => {
    linksite.value = await linksiteInstance.getAll();
    console.log(linksite); // Ajoutez cette ligne
    linksite.value = linksite.value.list;


  });
  </script>

<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 4 columns */
    grid-template-rows: repeat(2, auto);
    /* 2 rows */
    grid-gap: 20px;
}

.card {
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
}

.card img {
    max-width: 100%;
    height: auto;
}
</style>
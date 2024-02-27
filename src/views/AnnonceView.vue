
<script setup>



import { WebsiteGetAll } from "@/services/website.js";
import { ref, onMounted } from 'vue';
import NavBar from '@/components/AnnonceNav.vue';


const websites = ref([]);


async function loadData () {
let data = await WebsiteGetAll();
websites.value = data.list;

}

onMounted(() => {
  loadData();
});



</script>

<template>

  <h1>
  </h1>

  <div>

    <NavBar />

  </div>
  


 

  
</template>


<style scoped>
</style>
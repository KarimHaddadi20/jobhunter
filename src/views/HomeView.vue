
<script setup>



import { WebsiteGetAll } from "@/services/website.js";
import { ref, onMounted } from 'vue';


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
    Home
  </h1>

  {{ websites }}

</template>


<style scoped>
</style>
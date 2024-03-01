<script setup>
import { WebsiteGetAll } from "@/services/website.js";
import { ref, onMounted } from "vue";
import coverletterInstance from "@/services/coverletter.js";
import AnnonceNav from "@/components/AnnonceNav.vue";
import Cover from "@/components/Cover.vue";





const websites = ref([]);
const coverletter = ref([]);



async function loadData() {
  let data = await WebsiteGetAll();
  websites.value = data.list;
  console.log(websites.value); // Ajoutez cette ligne


  let coverletterData = await coverletterInstance.getAll();
  coverletter.value = coverletterData;
  console.log(coverletter.value); // Ajoutez cette ligne
}

onMounted(() => {
  loadData();
});

// import Calendar from 'primevue/calendar';
</script>

<template>
  <!-- <Calendar  /> -->

  <div>
    <AnnonceNav />
  </div>


  <div>
    <Cover />
  </div>
</template>

<style scoped></style>

<script setup>
import { WebsiteGetAll } from "@/services/website.js";
import { ref, onMounted } from "vue";
import DataTable from "@/components/DataTable.vue";
import NavCandidacy from "@/components/NavCandidacy.vue";
import trackingInstance from "@/services/trackingapp.js";



const websites = ref([]);
const candidacies = ref([]);

async function loadData() {
  let data = await WebsiteGetAll();
  websites.value = data.list;
  console.log(websites.value); // Ajoutez cette ligne



  let candidacyData = await candidacyInstance.getAll();
  candidacies.value = candidacyData;
  console.log(candidacies.value); // Ajoutez cette ligne




}

onMounted(() => {
  loadData();
});
</script>

<template>


    <AnnonceNav />
  <DataTable />

</template>

<style scoped>


</style>
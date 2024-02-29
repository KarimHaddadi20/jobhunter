<script setup>
import { WebsiteGetAll } from "@/services/website.js";
import { ref, onMounted } from "vue";
import AnnonceNav from "@/components/AnnonceNav.vue";
import Landing from "@/components/Landing.vue";
import DataTable from "@/components/DataTable.vue";
import candidacyInstance from "@/services/candidacy.js";
import trackingappInstance from "@/services/trackingapp.js";
import NavCandidacy from "@/components/NavCandidacy.vue";

const websites = ref([]);
const candidacies = ref([]);
const trackingapp = ref([]);

async function loadData() {
  let data = await WebsiteGetAll();
  websites.value = data.list;
  console.log(websites.value); // Ajoutez cette ligne

  let candidacyData = await candidacyInstance.getAll();
  candidacies.value = candidacyData;
  console.log(candidacies.value); // Ajoutez cette ligne

  let trackingappData = await trackingappInstance.getAll();
  trackingapp.value = trackingappData;
  console.log(trackingapp.value); // Ajoutez cette ligne
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
    <Landing />
  </div>

  <div>
    <DataTable />
    <NavCandidacy />
  </div>
</template>

<style scoped></style>

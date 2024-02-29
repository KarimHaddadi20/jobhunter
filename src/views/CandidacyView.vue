<script setup>
import { WebsiteGetAll } from "@/services/website.js";
import { ref, onMounted } from "vue";
import AnnonceNav from "@/components/AnnonceNav.vue";
import Landing from "@/components/Landing.vue";
import NavCandidacy from "@/components/NavCandidacy.vue";
import candidacyInstance from "@/services/candidacy.js";



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
  <div>
    <AnnonceNav />
  </div>


  <div>
<Landing />
  </div>


    <div>
<NavCandidacy />

    <!-- Add more fields as needed -->
  </div>


</template>

<style scoped>


</style>
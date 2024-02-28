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


  let candidacyData = await candidacyInstance.getAll();
  candidacies.value = candidacyData;
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
<div v-for="candidacy in candidacies" :key="candidacy.id">
    <h2>{{ candidacy.title }}</h2>
    <p>{{ candidacy.society }}</p>
    <!-- Add more fields as needed -->
  </div>

    </div>

</template>

<style scoped>


</style>
<script setup>
import { WebsiteGetAll } from "@/services/website.js";
import { ref, onMounted } from "vue";
import NavBar from "@/components/AnnonceNav.vue";
// import SearchBar from "@/components/SearchBar.vue";
import Formulaire from "@/components/Formulaire.vue";

const websites = ref([]);

async function loadData() {
  let data = await WebsiteGetAll();
  websites.value = data.list;
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <div>
    <NavBar />
  </div>

  <div>
    <Formulaire />
  </div>
</template>

<style scoped></style>

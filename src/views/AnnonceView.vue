<script setup>
import { WebsiteGetAll } from "@/services/website.js";
import { ref, onMounted } from "vue";
import NavBar from "@/components/AnnonceNav.vue";
import SearchBar from "@/components/SearchBar.vue";

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
    <SearchBar />
  </div>
</template>

<style scoped></style>

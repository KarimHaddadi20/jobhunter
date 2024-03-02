<script setup>
import { WebsiteGetAll } from "@/services/website.js";
import { ref, onMounted } from "vue";
import DataTable from "@/components/DataTable.vue";

const websites = ref([]);
const candidacies = ref([]);

async function loadData() {
  let data = await WebsiteGetAll();
  websites.value = data.list;
  console.log(websites.value);

  let candidacyData = await candidacyInstance.getAll();
  candidacies.value = candidacyData;
  console.log(candidacies.value);
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <AnnonceNav />
  <DataTable />
</template>

<style scoped></style>

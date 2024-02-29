<script setup>
import { WebsiteGetAll } from "@/services/website.js";
import { ref, onMounted } from "vue";
import VisuoPitch from "@/components/VisuoPitch.vue";
import Confidence from "@/components/Confidence.vue";
import NavBar from "@/components/NavBar.vue";
import List from "@/components/List.vue";

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
  <h1></h1>

  <div>
    <NavBar />
  </div>

  <div>
    <VisuoPitch />
  </div>

  <div>
    <Confidence />
  </div>

<div>

  <DataTable />
</div>



</template>

<style scoped></style>

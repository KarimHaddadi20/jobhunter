<script setup>
import AnnonceNav from "@/components/AnnonceNav.vue";
import List from "@/components/List.vue";
import LinksiteInstance from "@/services/linksite.js";
import { ref, onMounted } from "vue";

// Declare Linksite variable
let Linksite = ref(null);

async function loadData() {
    let data = await LinksiteInstance.getAll();
    Linksite.value = data;
    console.log(Linksite.value);
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
        <List />
    </div>
</template>

<style scoped></style>
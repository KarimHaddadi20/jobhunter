<script setup>
import { WebsiteGetAll } from "@/services/website.js";
import { ref, onMounted } from "vue";
import AnnonceNav from "@/components/AnnonceNav.vue";
import Landing from "@/components/Landing.vue";
import NavCandidacy from "@/components/NavCandidacy.vue";


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
    <AnnonceNav />
  </div>


  <div>
<Landing />
  </div>


    <div>
<NavCandidacy />

    </div>

</template>

<style scoped>


</style>
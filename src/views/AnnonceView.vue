<script setup>
import { WebsiteGetAll } from "@/services/website.js";
import { ref, onMounted } from "vue";
import AnnonceNav from "@/components/AnnonceNav.vue";
import Formulaire from "@/components/Formulaire.vue";
import All from "@/components/All.vue";

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
  <div class="macbook-air-5">
    <div class="rectangle-96">
      <AnnonceNav class="annonces" />
      <div class="rectangle-97">
        <Formulaire class="datatable formulaire" />
        <All />
      </div>
    </div>
  </div>
</template>

<style scoped>
.macbook-air-5 {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  backdrop-filter: blur(10px);
  background: #d5efff url("@/assets/background.jpg");
}

.rectangle-96 {
  position: absolute;
  width: 90vw;
  height: 90vh;
  left: 5vw;
  top: 5vh;
  background: rgba(17, 50, 100, 0.1);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.rectangle-97 {
  position: absolute;
  width: 58vw;
  height: 68vh;
  left: 25vw;
  top: 10vh;
  background: rgba(255, 255, 255, 0);
  border-radius: 25px;
  overflow: auto;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  scrollbar-width: thin;
  scrollbar-color: rgb(255, 255, 255) rgb(117, 94, 215);
}

.annonces {
  position: absolute;
  width: 20vw;
  height: 10vh;
  left: 6vw;
  top: 10vh;
  font-family: "roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 1.8vh;
  line-height: 5vh;
  color: #ffffff;
}
</style>

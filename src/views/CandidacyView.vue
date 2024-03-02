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
  <div class="macbook-air-5">
    <div class="rectangle-96">
      <AnnonceNav class="annonces" />
      <div class="rectangle-97">
        <DataTable class="datatable formulaire" />
        <!-- Ajoutez vos autres éléments ici -->
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
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Add this line */

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

.formulaire {
  position: absolute;
  width: 40vw;
  height: 20vh;
  left: 10vw;
  top: 10vh;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vh;
  line-height: 1.8vh;
  color: #ffffff;
}
</style>

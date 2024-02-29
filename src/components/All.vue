<template>
  <div>
    <h1>Liste des candidatures</h1>
    <ul>
      <li v-for="candidacy in candidacies" :key="candidacy.id">
        <h2>{{ candidacy.Title }}</h2>
        <p>{{ candidacy.society }}</p>
        <p>{{ candidacy.location }}</p>
        <p>{{ candidacy.date }}</p>
        <p>{{ candidacy.demande }}</p>

        <button @click="deleteCandidacy(candidacy.id)">Supprimer</button>

        <!-- Ajoutez plus de détails sur la candidature ici -->
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import candidacyInstance from "@/services/candidacy.js";

const candidacies = ref([]);

onMounted(async () => {

  const response = await candidacyInstance.getAll();
  candidacies.value = response.list;
  console.log(candidacies.value);
});


</script>
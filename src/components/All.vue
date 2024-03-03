<template>
  <div>
    <h1>Liste des candidatures</h1>
    <ul>
      <li v-for="candidacy in candidacies" :key="candidacy.Id">
        <h2>{{ candidacy.Title }}</h2>
        <p>{{ candidacy.society }}</p>
        <p>{{ candidacy.location }}</p>
        <p>{{ candidacy.date }}</p>
        <p>{{ candidacy.demande }}</p>

        <button @click="deleteCandidacy(candidacy.Id)">Supprimer</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import candidacyInstance from "@/services/candidacy.js";

const candidacies = ref([]);

const fetchCandidacies = async () => {
  const response = await candidacyInstance.getAll();
  candidacies.value = response.list;
  console.log(candidacies.value);
};

onMounted(fetchCandidacies);

const deleteCandidacy = async (id) => {
  console.log('Deleting candidacy with id:', id);
  try {
    await candidacyInstance.delete(id);
    candidacies.value = candidacies.value.filter(candidacy => candidacy.Id !== id);
    
    // Supprimer la candidature du localStorage
    const storedCandidacies = JSON.parse(localStorage.getItem('candidacies')) || [];
    const updatedCandidacies = storedCandidacies.filter(candidacy => candidacy.Id !== id);
    localStorage.setItem('candidacies', JSON.stringify(updatedCandidacies));
  } catch (error) {
    console.error(error);
  }
};
</script>

<style scoped>
h1, h2, p {
  color: white;
}

ul {
  list-style-type: none;
}

li {
  background-color: #8ec8f6;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

button {
  background-color: #8ec8f6;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: "Roboto Slab", serif;
  font-size: 12px;
}

button:hover {
  background-color: #8ec8f6;
}
</style>
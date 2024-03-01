<template>
  <div>
    <h1>bonjour</h1>
    <div>
      <textarea
        v-model="newLetter.cover"
        placeholder="Lettre de motivation"
      ></textarea>
      <button @click="addLetter">Insérer</button> <!-- Add this line -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import coverletterInstance from "@/services/coverletter.js";

const newLetter = ref({
  cover: "",
});

const addLetter = async () => {
  try {
    await coverletterInstance.create(newLetter.value.cover);
    console.log("Job ajouté avec succès à la base de données");
  } catch (error) {
    console.error("Une erreur est survenue lors de l'ajout de la lettre de motivation à la base de données");
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  padding: 10px;
}

button {
  padding: 10px 20px;
  margin-top: 10px;
}
</style>
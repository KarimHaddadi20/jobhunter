<template>
  <div>
    <h1>Lettre de motivation</h1>
    <div>
      <textarea
        v-model="newLetter.cover"
        placeholder="Lettre de motivation"
      ></textarea>
      <button @click="addLetter">sauvegarder</button>
      <button @click="deleteAllLetters">Supprimer tout</button>
      <div v-for="(letter, index) in insertedLetters" :key="index">
        <p>{{ letter }}</p>
        <button @click="deleteLetter(index)">Supprimer cette lettre</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

import coverletterInstance from "@/services/coverletter.js";

const newLetter = ref({
  cover: "",
});

let insertedLetters = ref(JSON.parse(localStorage.getItem('insertedLetters')) || []);

const addLetter = async () => {
  try {
    await coverletterInstance.create(newLetter.value.cover);
    insertedLetters.value.push(newLetter.value.cover);
    localStorage.setItem('insertedLetters', JSON.stringify(insertedLetters.value));
    newLetter.value.cover = "";
    console.log("Lettre de motivation ajoutée avec succès à la base de données");
  } catch (error) {
    console.error("Une erreur est survenue lors de l'ajout de la lettre de motivation à la base de données");
  }
};

const deleteLetter = (index) => {
  if (confirm("Êtes-vous sûr de vouloir supprimer cette lettre de motivation ?")) {
    insertedLetters.value.splice(index, 1);
    localStorage.setItem('insertedLetters', JSON.stringify(insertedLetters.value));
  }
};

const deleteAllLetters = () => {
  if (confirm("Êtes-vous sûr de vouloir supprimer toutes les lettres de motivation ?")) {
    insertedLetters.value = [];
    localStorage.removeItem('insertedLetters');
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
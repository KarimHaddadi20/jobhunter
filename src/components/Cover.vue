<template>
  <div class="container">
    <h3>Saisissez votre lettre de motivation</h3>
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

let insertedLetters = ref(
  JSON.parse(localStorage.getItem("insertedLetters")) || []
);

const addLetter = async () => {
  try {
    await coverletterInstance.create(newLetter.value.cover);
    insertedLetters.value.push(newLetter.value.cover);
    localStorage.setItem(
      "insertedLetters",
      JSON.stringify(insertedLetters.value)
    );
    newLetter.value.cover = "";
    console.log(
      "Lettre de motivation ajoutée avec succès à la base de données"
    );
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de l'ajout de la lettre de motivation à la base de données"
    );
  }
};

const deleteLetter = (index) => {
  if (
    confirm("Êtes-vous sûr de vouloir supprimer cette lettre de motivation ?")
  ) {
    insertedLetters.value.splice(index, 1);
    localStorage.setItem(
      "insertedLetters",
      JSON.stringify(insertedLetters.value)
    );
  }
};

const deleteAllLetters = () => {
  if (
    confirm(
      "Êtes-vous sûr de vouloir supprimer toutes les lettres de motivation ?"
    )
  ) {
    insertedLetters.value = [];
    localStorage.removeItem("insertedLetters");
  }
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  padding: 10px;
  background: transparent; 
  border: 1px solid white; 
  color: white; 
}

button {
  background-color: #8ec8f6;
  color: rgb(255, 255, 255);
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-family: "Roboto Slab", serif;
  margin-right: 10px;
}

.container {
  margin-top: 50px;
  padding-left: 25px;
  padding-right: 25px;
}

h3 {
  margin-bottom: 35px;
}

p {
  color: white;
  padding-top: 100px;
  padding-bottom: 25px;
}

h3 {
  font-family: "Roboto Slab", serif;
  color: #ffffff;
}

::placeholder {
  color: rgb(182, 180, 180);
  opacity: 1; 
}
</style>

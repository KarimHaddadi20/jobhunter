<template>

  <div>
  <h3>Remplissez le formulaire avec votre annonces</h3>
  </div>
  <div class="container">


    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div>
          <label for="title">Titre de l'annonce:</label>
          <input id="title" v-model="form.title" type="text" required />
        </div>

        <div>
          <label for="society">Nom de la société:</label>
          <input id="society" v-model="form.society" type="text" required />
        </div>

        <div>
          <label for="demande">Demande:</label>
          <input id="demande" v-model="form.demande" type="text" required />
        </div>

        <div>
          <label for="location">Emplacement:</label>
          <input id="location" v-model="form.location" type="text" required />
        </div>

        <div>
          <label for="date">Date de l'annonce:</label>
          <input id="date" v-model="form.date" type="date" required />
        </div>

        <button type="submit">Soumettre</button>
      </form>


    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import candidacyInstance from "@/services/candidacy.js";

const form = ref({
  title: "",
  logo: "",
  society: "",
  demande: "",
  location: "",
  date: "",
});

const submitForm = async () => {
  await candidacyInstance.create(
    form.value.title,
    form.value.logo,
    form.value.society,
    form.value.demande,
    form.value.location,
    form.value.date
  );
};
</script>

<style scoped>

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.form-container form,
.image-container {
  flex: 1;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; 
  margin: auto;
  height: 55vh;
  width: 60%;
  border-radius: 2%;
  margin-bottom: 60px;
}

.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.form-container form,
.image-container {
  flex: 1;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  font-family: "Roboto Slab", serif;
  border-radius: 5px;
  border: 1px solid #ffffff;
  font-size: 12px;
  background-color: #8ec8f6;
  color: white;
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
  margin-bottom: 20px;
}

button:hover {
  background-color: #8ec8f6;
}


label {
  color: white;
  font-family: "Roboto Slab", serif;
  font-size: 12px;
}


h3 {
  text-align: center;
  color: white;
  font-family: "Roboto Slab", serif;
  font-size: 20px;
  padding-top: 25px;
  margin-top: 60px; 

}


</style>

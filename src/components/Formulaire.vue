<template>
  <div class="container">
    <div class="form-container">
      <form @submit.prevent="submitForm">
        <div>
          <label for="title">Titre de l'annonce:</label>
          <input id="title" v-model="form.title" type="text" required />
        </div>

        <!-- <div>
        <label for="logo">Logo:</label>
        <input id="logo" v-model="form.logo" type="text" required>
      </div> -->

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

      <div class="image-container">
        <img src="@/assets/homepicture.jpg" alt="Description de l'image" />
      </div>
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Utilisez 100vh pour prendre toute la hauteur de la fenêtre de visualisation */
  background-color: skyblue;
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

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Utilisez 100vh pour prendre toute la hauteur de la fenêtre de visualisation */
  background-color: skyblue;
  margin: auto;
  height: 70vh;
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

.image-container img {
  width: 90%; /* Ajustez cette valeur pour changer la largeur de l'image */
  height: auto; /* Ajustez cette valeur pour changer la hauteur de l'image */
}
</style>

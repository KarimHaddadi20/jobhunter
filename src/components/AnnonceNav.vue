<!-- AnnonceNavBar.vue -->

<template>
  <nav class="navbar">
    <div>
      <a href=".">
        <img src="@/assets/logo2.png" alt="Logo" class="logo" />
      </a>
    </div>
    <div>
      <router-link to="/cover" class="nav-link"><img src="@/assets/icon11.png" alt="Icon" class="icon"> Annonces</router-link>
      <router-link to="/annonce" class="nav-link"><img src="@/assets/icon8.png" alt="Icon" class="icon"> Formulaire</router-link>
      <router-link to="/candidacy" class="nav-link"><img src="@/assets/icon9.png" alt="Icon" class="icon"> Suivie</router-link>
      <router-link to="/list" class="nav-link"><img src="@/assets/icon12.png" alt="Icon" class="icon"> Recherche</router-link>
      <button @click="logout" class="nav-link"><img src="@/assets/icon10.png" alt="Icon" class="icon"> Déconnexion</button>
    </div>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const logout = () => {
  // Clear user data
  // This depends on how you're storing user data
  // For example, if you're using Vuex, you might dispatch a logout action
  // Redirect to home page
  router.push("/");
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  margin-bottom: 80px;
}

.logo {
  height: 120px;
}

.links {
  display: flex;
}

.nav-link {
  display: inline-block;
  font-family: "Roboto Slab", serif;
  font-style: normal;
  margin-right: 4em;
  color: white;
  line-height: 60px;
  font-size: 18px;
}

.icon {
  display: inline-block;
  height: 45px;
  margin-right: 5px;
  /* Supprimer l'alignement vertical */
}
</style>

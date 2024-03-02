<!-- AnnonceNavBar.vue -->

<template>
  <nav class="navbar">
    <div>
      <a href=".">
        <img src="@/assets/logo2.png" alt="Logo" class="logo" />
      </a>
    </div>
    <div>
      <router-link to="/cover" class="nav-link">Annonces</router-link>
      <router-link to="/annonce" class="nav-link">Formulaire</router-link>
      <router-link to="/candidacy" class="nav-link">Suivie</router-link>
      <router-link to="/list" class="nav-link">Recherche</router-link>
      <button @click="logout" class="nav-link">Déconnexion</button>

    </div>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';


const router = useRouter();


const logout = () => {
  // Clear user data
  // This depends on how you're storing user data
  // For example, if you're using Vuex, you might dispatch a logout action

  // Redirect to home page
  router.push('/');
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
  font-weight: 400;
  font-style: normal;
  margin-right: 12em;
  color: white;
}

</style>

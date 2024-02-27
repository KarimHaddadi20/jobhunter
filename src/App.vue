<!-- App.vue -->

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useStore } from "@/stores/user.js";
import { computed } from "vue";

const userInfo = computed(() => {
  return useStore().getUser;

});

</script>

<template>
  <header>
   <nav>
      <!-- <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
       -->

       {{ userInfo }}
    </nav>
  </header>
  

  <RouterView />
</template>

<style scoped>
</style>

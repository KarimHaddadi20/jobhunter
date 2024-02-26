<!-- App.vue -->

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue';
import VisuoPitch from './components/VisuoPitch.vue';
import Confidence from './components/Confidence.vue';

</script>

<template>
  <header>

    <NavBar />

    
    
    <!-- <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav> -->
    
  </header>
  
  <RouterView />
  
  <div>
    
    <VisuoPitch />
    
  </div>

<div>

  <Confidence />

</div>
</template>

<style scoped>




</style>

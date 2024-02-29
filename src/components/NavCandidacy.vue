<template>
    <div class="container">
      <div class="nav">
        <button @click="view = 'all'">Tout</button>
        <!-- <button @click="view = 'received'">Reçu</button>
        <button @click="view = 'processing'">En cours de traitement</button>
        <button @click="view = 'refused'">Refusé</button> -->
      </div>
  
      <div class="content">
        <component :is="view"></component>
      </div>
    </div>
  </template>
  
  <script>
  import All from '@/components/All.vue';
  import Received from '@/components/Received.vue';
  import Processing from '@/components/Processing.vue';
  import Refused from '@/components/Refused.vue';
  import candidacyInstance from "@/services/candidacy.js";



  
  export default {
    data() {
      return {
        view: 'all',
        candidacies: [],
      };
    },
    components: {
      all: All,
      received: Received,
      processing: Processing,
      refused: Refused,
    },

    mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      let data = await candidacyInstance.getAll();
      this.candidacies = data;
    },
  },
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
  }
  
  .nav {
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100vh;
    padding: 20px;
    margin-right: 20px;
  }
  
  .nav button {
    margin-bottom: 15px;
  }
  
  .content {
    flex-grow: 12;
    
  }
  </style>
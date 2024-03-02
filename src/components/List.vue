<template>
  <div class="container">
    <h3>Retrouvez toutes les annonces dans les sites ci-dessous</h3> <!-- Ajoutez votre titre ici -->

    <div class="row">
      <div v-for="item in linksite" :key="item.id" class="col-md-4 mb-3">
        <div class="card h-100">
          <img v-if="item.logo[0]" :src="item.logo[0].signedUrl" class="card-img-top" alt="Logo" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ item.title }}</h5>
            <a :href="item.url" class="btn mt-auto">visiter le site</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import linksiteInstance from '@/services/linksite.js';

const linksite = ref([]);

onMounted(async () => {
  linksite.value = await linksiteInstance.getAll();
  console.log(linksite);
  linksite.value = linksite.value.list;
});
</script>

<style scoped>
.card {
  width: 12rem; /* Réduisez la largeur ici */
  max-height: 18rem; /* Ajoutez une hauteur maximale si nécessaire */
  background: rgb(255, 255, 255);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-left: 60px;
}

.btn {
  background-color: #8ec8f6; /* Changez la couleur ici */
  color: white; /* Changez la couleur du texte en blanc pour une meilleure lisibilité */
}

.card {
  height: auto; /* Changez la hauteur ici */
}

.card-title, .card-text {
  font-size: 0.8rem; /* Réduisez la taille de la police ici */
  margin-bottom: 0.5rem; /* Réduisez les marges ici */
}


h3 {
  margin-bottom: 100px; /* Ajoutez une marge en bas pour plus d'espace */
  font-family: "Roboto Slab", serif; /* Changez la police ici */
  font-size: 1.5rem; /* Changez la taille de la police ici */
  color: #ffffff; /* Changez la couleur ici */
  margin-top: 100px;
  padding-left: 50px;
}

</style>
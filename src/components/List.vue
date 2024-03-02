<template>
  <div class="container">
    <h3>Retrouvez toutes les annonces dans les sites ci-dessous</h3>

    <div class="row">
      <div v-for="item in linksite" :key="item.id" class="col-md-4 mb-3">
        <div class="card h-100">
          <img
            v-if="item.logo[0]"
            :src="item.logo[0].signedUrl"
            class="card-img-top"
            alt="Logo"
          />
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
import { ref, onMounted } from "vue";
import linksiteInstance from "@/services/linksite.js";

const linksite = ref([]);

onMounted(async () => {
  linksite.value = await linksiteInstance.getAll();
  console.log(linksite);
  linksite.value = linksite.value.list;
});
</script>

<style scoped>
.card {
  width: 12rem;
  max-height: 18rem;
  background: rgb(255, 255, 255);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-left: 60px;
}

.btn {
  background-color: #8ec8f6;
  color: white;
}

.card {
  height: auto;
}

.card-title,
.card-text {
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

h3 {
  margin-bottom: 100px;
  font-family: "Roboto Slab", serif;
  font-size: 1.5rem;
  color: #ffffff;
  margin-top: 100px;
  padding-left: 50px;
}
</style>

<template>
  <div class="container">
    <div class="row">
      <div v-for="item in linksite" :key="item.id" class="col-md-3 mb-3">
        <div class="card h-100" style="width: 14rem;">
          <img v-if="item.logo[0]" :src="item.logo[0].signedUrl" class="card-img-top" alt="Logo" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.url }}</p>
            <a :href="item.url" class="btn btn-primary mt-auto">visiter le site</a>
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
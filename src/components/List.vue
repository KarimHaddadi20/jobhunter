<script setup>
import { ref, onMounted } from "vue";
import List from "@/services/list.js";

const cards = ref([]);

onMounted(async () => {
    const data = await List.getAll();
    cards.value = data.map(item => ({
        title: item.title,
        imageUrl: item.logo
    }));
});
</script>

<template>
    <div class="card-container">
        <div v-for="(card, index) in cards" :key="index" class="card">
            <img :src="card.imageUrl" alt="Card Image" />
            <h3>{{ card.title }}</h3>
        </div>
    </div>
</template>

<style scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* 4 columns */
    grid-template-rows: repeat(2, auto);
    /* 2 rows */
    grid-gap: 20px;
}

.card {
    width: 100%;
    border: 1px solid #ccc;
    padding: 10px;
}

.card img {
    max-width: 100%;
    height: auto;
}
</style>
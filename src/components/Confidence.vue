<template>

<div>

<h3>Ils nous font confiance</h3>

</div>


<div class="image-container">
    <img class="img1" src="@/assets/confiance1.png"  alt="Description de l'image 1">
    <img class="img2" src="@/assets/confiance2.jpg" alt="Description de l'image 2">
  </div>
</template>

<script setup>
//
</script>

<style scoped>


h3 {
margin-top: 5em;
font-family: "Roboto Slab", sans-serif;
font-weight: 400;
font-size: 25px;
text-align: center;
}


.image-container {
    display: flex;
    justify-content: center; /* Centrage horizontal */
    align-items: center; /* Centrage vertical */
    height: 25vh;

  }
  
  .image-container img  {
    width: 10%;
    margin: 0 10px; /* Ajustez cette valeur selon vos besoins */
    
    }


    
</style>
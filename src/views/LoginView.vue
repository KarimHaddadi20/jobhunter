<template>
    <div class="signup-page">
      <div class="content-container">
      <div class="signup-container">
        <h2>Login</h2>

        <p v-if="error">ERREUR : {{ error }}</p>
        <p v-if="success">ERREUR : {{ success }}</p>
    
  
        <form @submit.prevent="submitForm">

          <label for="lname">Last Name:</label><br>
          <input type="text" id="name" v-model="form.name"><br>
          <label for="email">Email:</label><br>
          <input type="email" id="email" v-model="form.email"><br>
          <label for="pwd">Password:</label><br>
          <input type="password" id="pwd" v-model="form.pwd"><br>
          <input type="submit" value="Submit">
          <p> 

            <button @click="createAccount">Create Account</button>
            <button @click="login">Login</button>
            <button @click="logout">Logout</button>

          </p>
        </form> 
      </div>
      <img src="@/assets/signup.png" alt="img">
    </div>
    </div>
  </template>
  
  <script setup>


import { ref } from 'vue';


let form = ref({
    name: 'karim',
    email: 'karim23@gmail.com',
    pwd: 'thisisapassword',
    });



    let error = ref(null);
    let success = ref(null);

    async function createAccount () {

console.clear();
console.log(form.value);

    }



  </script>
  
  <style scoped>
  .signup-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    gap: 50px;
    background-color:  #BEC4D7;
  
  }
  
  .content-container {
    display: flex;
    gap: 20px; /* Adjust as needed */
    background-color: #ffffff; /* Adjust as needed */
    padding: 20px; /* Adjust as needed */
    border-radius: 10px; /* Adjust as needed */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Adjust as needed */
  }
  
  h2 {
    font-size: 2em;
    font-weight: 700;
    font-family: "Roboto Slab", sans-serif;
    margin-bottom: 20px;
    color: #4157D6;
  }
  
  
  .signup-container label {
    font-family: "Roboto Slab", sans-serif;
    font-size: 14px; /* Adjust as needed */
    color: #666; /* Adjust as needed */
    text-transform: none;
  }
  
  .signup-container input {
    font-family: "Roboto Slab", sans-serif;
    font-size: 15px; /* Adjust as needed */
    color: #666; /* Adjust as needed */
  }
  
  .signup-container input[type="submit"] {
    margin-top: 20px; /* Adjust as needed */
    
  }
  input[type="submit"] {
    background-color: #6f3bb8; /* Changer la couleur de fond */
    color: white; /* Changer la couleur du texte */
    border: none; /* Supprimer la bordure */
    padding: 15px 32px; /* Ajouter du padding */
    text-align: center; /* Centrer le texte */
    text-decoration: none; /* Supprimer le soulignement du texte */
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer; /* Changer le curseur en main lorsque vous survolez */
    transition-duration: 0.4s; /* Ajouter une animation lors du survol */
    border-radius: 12px;
  }
  
  input[type="submit"]:hover {
    background-color: #45a049; /* Changer la couleur de fond lors du survol */
  }
  
  input[type="text"] {
    background-color: #f2f2f2; /* Changer la couleur de fond */
    color: rgba(0, 0, 0, 0); /* Changer la couleur du texte */
    width: 100%; /* Changer la largeur */
    padding: 5px 12px; /* Changer le padding */
    margin: 8px 0;
    box-sizing: border-box;
    border-color: rgba(205, 205, 205, 0); /* Assurez-vous que la largeur et la hauteur incluent le padding et la bordure */
    border-radius: 10px;
  }
  
  input[type="email"] {
    background-color: #f2f2f2; /* Changer la couleur de fond */
    color: rgba(0, 0, 0, 0); /* Changer la couleur du texte */
    width: 100%; /* Changer la largeur */
    padding: 5px 12px; /* Changer le padding */
    margin: 8px 0;
    box-sizing: border-box;
    border-color: rgba(205, 205, 205, 0); /* Assurez-vous que la largeur et la hauteur incluent le padding et la bordure */
    border-radius: 10px;
    color: rgb(0, 0, 0);
  
  }
  
  input[type="password"] {
    background-color: #f2f2f2; /* Changer la couleur de fond */
    color: rgba(0, 0, 0, 0); /* Changer la couleur du texte */
    width: 100%; /* Changer la largeur */
    padding: 5px 12px; /* Changer le padding */
    margin: 8px 0;
    box-sizing: border-box;
    border-color: rgba(205, 205, 205, 0); /* Assurez-vous que la largeur et la hauteur incluent le padding et la bordure */
    border-radius: 10px;
    color: rgb(0, 0, 0);
  
  }
  
  form {
    color: rgb(0, 0, 0);
  }
  input[type="text"] {
    color: rgb(0, 0, 0);
  }
  
  
  
  
  </style>
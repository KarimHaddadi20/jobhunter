<template>
  <div class="signup-page">
    <div class="content-container">
    <div class="signup-container">
      <h2>Sign Up</h2>
  

      <form @submit.prevent="submitForm">
        <label for="fname">First Name:</label><br>
        <input type="text" id="fname" v-model="fname"><br>
        <label for="lname">Last Name:</label><br>
        <input type="text" id="lname" v-model="lname"><br>
        <label for="email">Email:</label><br>
        <input type="email" id="email" v-model="email"><br>
        <label for="pwd">Password:</label><br>
        <input type="password" id="pwd" v-model="pwd"><br>
        <input type="submit" value="Submit">
      </form> 
    </div>
    <img src="@/assets/signup.png" alt="img">
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fname: '',
      lname: '',
      email: '',
      pwd: ''
    }
  },
  methods: {
    submitForm() {
      // Handle form submission here
      // You can access form data using this.fname, this.lname, this.email, and this.pwd
    }
  }
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
}

</style>
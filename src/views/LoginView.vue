<!-- LoginView -->

<template>
  <div class="signup-page">
    <div class="content-container">
      <div class="signup-container">
        <h2>Se connecter</h2>

        <p v-if="error">ERREUR : {{ error }}</p>
        <p v-if="success">success : {{ success }}</p>

        <form @submit.prevent="submitForm">
          <label for="lname">Last Name:</label><br />
          <input type="text" id="name" v-model="form.name" /><br />
          <label for="email">Email:</label><br />
          <input type="email" id="email" v-model="form.email" /><br />
          <label for="pwd">Password:</label><br />
          <input type="password" id="pwd" v-model="form.pwd" /><br />
<!-- !          <input type="submit" value="Submit" /> -->
          <p>
            <!-- <button @click="createAccount">Create Account</button> -->
            <button class="login-button" @click="login">Se connecter</button>
            <button class="logout-button" @click="logout">Déconnexion</button>
          </p>
        </form>
      </div>
      <img src="@/assets/signup.png" alt="img" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import userInstance from "@/services/user";
import { cryptoPassword } from "@/services/utils.js";
import { useStore } from "@/stores/user.js";
import { useRouter } from 'vue-router';


let form = ref({
  name: "karim",
  email: "karim23@gmail.com",
  pwd: "thisisapassword",
});

let error = ref(null);
let success = ref(null);

async function createAccount() {
  console.clear();
  console.log(form.value);

  error.value = null;
  success.value = null;

  let user = await userInstance.exists(form.value.email);
  if (user.list.length > 0) {
    error.value = "Email already exists";
    return false;
  }

  let data = await userInstance.create(
    form.value.email,
    cryptoPassword(form.value.pwd),
    form.value.name
  );
  success.value = "Account created successfully";
}

async function login() {
  error.value = null;
  success.value = null;
  let user = await userInstance.login(
    form.value.email,
    cryptoPassword(form.value.pwd)

    
  );

  if (user.list.length != 1) {
    error.value = "Email or password incorrect";
    return false;
  }

  useStore().setUser(user.list[0]);

  success.value = "bonjour " + user.list[0].name;

router.push("/annonce");

}
const router = useRouter();

async function logout() {
  useStore().setUser(null);
  router.push("/");
}


</script>

<style scoped>
.signup-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 50px;
  background-color: #bec4d7;
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
  color: #4157d6;
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
  border-color: rgba(
    205,
    205,
    205,
    0
  ); /* Assurez-vous que la largeur et la hauteur incluent le padding et la bordure */
  border-radius: 10px;
}

input[type="email"] {
  background-color: #f2f2f2; /* Changer la couleur de fond */
  color: rgba(0, 0, 0, 0); /* Changer la couleur du texte */
  width: 100%; /* Changer la largeur */
  padding: 5px 12px; /* Changer le padding */
  margin: 8px 0;
  box-sizing: border-box;
  border-color: rgba(
    205,
    205,
    205,
    0
  ); /* Assurez-vous que la largeur et la hauteur incluent le padding et la bordure */
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
  border-color: rgba(
    205,
    205,
    205,
    0
  ); /* Assurez-vous que la largeur et la hauteur incluent le padding et la bordure */
  border-radius: 10px;
  color: rgb(0, 0, 0);
}

form {
  color: rgb(0, 0, 0);
}
input[type="text"] {
  color: rgb(0, 0, 0);
}



.login-button {
  background-color: #6f3bb8; /* Changer la couleur de fond */
  color:#ffffff; /* Changer la couleur du texte */
  border: none; /* Supprimer la bordure */
  padding: 7px 32px; /* Ajouter du padding */
  text-align: center; /* Centrer le texte */
  text-decoration: none; /* Supprimer le soulignement du texte */
  display: inline-block;
  font-size: 14px;
  margin: 9px 2px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid #6f3bb8;
  

}
.logout-button {
  background-color: #ffffff; /* Changer la couleur de fond */
  color:#6f3bb8; /* Changer la couleur du texte */
  border: none; /* Supprimer la bordure */
  padding: 7px 30px; /* Ajouter du padding */
  text-align: center; /* Centrer le texte */
  text-decoration: none; /* Supprimer le soulignement du texte */
  display: inline-block;
  font-size: 14px;
  margin: 9px 2px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid #6f3bb8;

}

</style>

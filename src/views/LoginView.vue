<!-- LoginView -->

<template>
  <div class="signup-page">
    <div class="content-container">
      <div class="signup-container">
        <h2>Se connecter</h2>

        <p v-if="error">ERREUR : {{ error }}</p>
        <p v-if="success">success : {{ success }}</p>

        <label for="email">Email:</label><br />
        <input type="email" id="email" v-model="form.email" /><br />
        <label for="pwd">Password:</label><br />
        <input type="password" id="pwd" v-model="form.pwd" /><br />
        <p>
          <button class="login-button" @click="login">Se connecter</button>
        </p>
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
import { useRouter } from "vue-router";

let form = ref({
  email: "",
  pwd: "",
});

let error = ref(null);
let success = ref(null);

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

  router.push("/candidacy");
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
  gap: 20px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
  font-size: 14px;
  color: #666;
  text-transform: none;
}

.signup-container input {
  font-family: "Roboto Slab", sans-serif;
  font-size: 15px;
  color: #666;
}

.signup-container input[type="submit"] {
  margin-top: 20px;
}

input[type="submit"] {
  background-color: #6f3bb8;
  color: white;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  border-radius: 12px;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

input[type="text"] {
  background-color: #f2f2f2;
  color: rgba(0, 0, 0, 0);
  width: 100%;
  padding: 5px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border-color: rgba(205, 205, 205, 0);
  border-radius: 10px;
}

input[type="email"] {
  background-color: #f2f2f2;
  color: rgba(0, 0, 0, 0);
  width: 100%;
  padding: 5px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border-color: rgba(205, 205, 205, 0);
  border-radius: 10px;
  color: rgb(0, 0, 0);
}

input[type="password"] {
  background-color: #f2f2f2;
  color: rgba(0, 0, 0, 0);
  width: 100%;
  padding: 5px 12px;
  margin: 8px 0;
  box-sizing: border-box;
  border-color: rgba(205, 205, 205, 0);
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
  background-color: #6f3bb8;
  color: #ffffff;
  border: none;
  padding: 7px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 9px 2px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid #6f3bb8;
}

.logout-button {
  background-color: #ffffff;
  color: #6f3bb8;
  border: none;
  padding: 7px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 9px 2px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  border: 1px solid #6f3bb8;
}
</style>

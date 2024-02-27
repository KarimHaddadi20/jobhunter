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

</style>
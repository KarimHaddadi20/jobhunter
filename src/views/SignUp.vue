<template>
    <div>
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
<template>

    <nav class="navbar">
        <div>
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
        </div>
        <div>
          <router-link to="/signup" class="nav-link">Sign Up</router-link>
          <router-link to="/login" class="nav-link">Login</router-link>
        </div>
      </nav>


</template>


<script setup>
//
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1em;
}

.logo {
  height: 150px;
  margin: 0 5em;
}


.links {
display: flex;

}


.nav-link {
    
display: inline-block;
font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0 5em;
}
</style>
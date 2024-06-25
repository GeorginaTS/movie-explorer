<template>
  <div>
    <h1>Movie Explorer</h1>
    <nav>
      <ul class="flex justify-around">
        <li><RouterLink to="/"> Home</RouterLink></li>
        <li><RouterLink to="/movies"> Movie List</RouterLink></li>
        <li><RouterLink to="/about"> About</RouterLink></li>
      </ul>
    </nav>
    <hr>
    <RouterView />
  </div>
</template>
<script>

export default {
  name:"App",
  data() {
    return {
      provide: {
          apiKey: this.publicEnvVar
      }
    }
  }
}
</script>
<script setup>
const publicEnvVar = import.meta.env.VITE_APP_APIKEY ;
</script>
<style>

</style>
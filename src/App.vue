<template>
  <div>
    <h1>Movie Explorer</h1>
    <nav class="bg-slate-200 p-2 font-bold">
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

    }
  }
}
</script>

<style>

</style>